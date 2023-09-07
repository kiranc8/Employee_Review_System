# Project Name

Employee Review System

## DEMO

https://employee-review-system-okce.onrender.com/

## OVERVIEW

The Employee Review System is a web-based application designed to simplify and streamline the process of employee performance reviews within an organization. It provides a platform for employees and managers to efficiently manage, conduct, and document performance reviews and feedback.

## TECH

Technologies used: Express JS, MongoDB, EJS, CSS, JavaScript,

## PROJECT STRUCTURE
```
project-root/
  |- config/
  |  |- flashmiddleware.js
  |  |- mongoose.js
  |  |- passport.js
  |
  |- controllers/
  |  |- home.js
  |  |- review.js
  |  |- user.js
  |  |- employee.js
  |
  |- models/
  |  |- user.js
  |  |- assignedReview.js
  |  |- myReview.js
  |
  |- routes/
  |  |- user.js
  |  |- employee.js
  |  |- review.js
  |  |- index.js
  |
  |- views/
  |  |- assign_work.ejs
  |  |- employee_view.ejs
  |  |- header.ejs
  |  |- footer.ejs
  |  |- home.ejs
  |  |- layout.ejs
  |  |- signinPage.ejs
  |  |- signupPage.ejs
  |
  |- assets/
  |  |- css/
  |  |  |- assign_Work.css
  |  |  |- employee_list.css
  |  |  |- form.css
  |  |  |- header.css
  |  |  |- home.css
  |  |  |- layout.css
  |
  |- index.js
  |- package.json
  |- .env
```

## GETTING STARTED

The application stores all the data in MongoDB database, so creating MongoDB cluster is required for running the project locally.

1. ```npm install```
2. Create your environment variables in .env file
```
PORT=8080
MONGO_URI=<YOUR_MONGODB_URI_TO_CONNECT_YOUR_APPLICATION>
```
3. ```node index.js```


Your application will be running in ```localhost:8080```
