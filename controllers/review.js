const User = require("../models/user");
const AssignedReview = require("../models/assignedReview");
const MyReview = require("../models/myReviews");

//render assignWork page
module.exports.home = async function (req, res) {
  try {
    let users = await User.find({});
    res.render("./assign_work", {
      users: users,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports.createReview = async function (req, res) {
  try {
    if(req.body.reviewer===req.body.recipient){
      req.flash(
        "error",
        "Reviewer and Recipient can't be same"
      );
      return res.redirect("back");
    }
    let review = await AssignedReview.findOne({
      fromUser: req.body.reviewer,
      toUser: req.body.recipient,
    });

    if (review) {
      req.flash(
        "success",
        "Review Already Assigned for same Recipient and Reviewer"
      );
      return res.redirect("back");
    }

    review = await AssignedReview.create({
      fromUser: req.body.reviewer,
      toUser: req.body.recipient,
    });

    let user = await User.findById(req.body.reviewer);

    user.assignedReviews.push(review);
    user.save();

    req.flash("success", "Review Assigned Successfully");
    return res.redirect("back");
  } catch (error) {
    console.log("Error", error);
  }
};
