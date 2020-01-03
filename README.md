# Food-Dine-In-Ready
A graduate object oriented design project

## App Idea
The app FoodDine-inReady is very different than all the leading food-industry apps available in the market because as of now, each and every app on the market is just focusing on delivery. But our Web-App, focuses on the dine-in aspect of the food sector and provides the user with an elevated experience by cutting down on their wait time, as well as exertion by providing multiple features such as, finding and reserving available parking space near the venue. The vision of our app is to provide customers with the same peace of mind in dine-in as they experience in a delivery based scenario, thus working towards 100% customer satisfaction. The App also provides a Map view of the inside of the restaurant which makes it stand out among other such apps.

The target audience for this app is not limited to any age-group. Everyone from a high school student to an old couple can utilize this app equally and benefit the same. However considering the scope of the project, and its online nature, we believe that the majority of the user base will comprise of Millenials as that is the most tech-savvy sector from the user-base.

## Project Overview

### Project Timeline
The project was divided into four phases to track the progress of the project at each phase.
![Project Timeline](/public/powerpointSlides/timeline.PNG)

### Technology Stacks
The following trending technology stacks were used for the complete project.
![Technology Stacks](/public/powerpointSlides/stacks.PNG)

### Front-end
The front-end react application is deployed on GitHub with three branches mainly master(User), restaurant manager and admin.
![Front-end React Application](/public/powerpointSlides/front_end.PNG)

### Database
MongoDB database is used in this project as it is a NoSql database that can store data in JSON format
![Database](/public/powerpointSlides/database.PNG)

### Back-end
The backend SpringBoot Application has been developed using spring boot and eclipse and has been deployed using GitHub and Heroku.
![Back-end SpringBoot Application](/public/powerpointSlides/back_end.PNG)

### Dev-Ops
The front-end react and back-end Springboot is continuously integrated and continuously deployed on aws amplify and heroku respectively.
![AWS Amplify](/public/powerpointSlides/aws_amplify.PNG)
![Heroku](/public/powerpointSlides/heroku.PNG) 

## System Architecture
The below diagram shows the system architecture of the project
![System Architecture](/public/powerpointSlides/system_architecture.PNG)

## Design Pattern and Principle
### MVC Design Pattern
For this project, we have utilized the model-view-controller design pattern. The model view controller design pattern states that the application/project must have a data model, presentation and control information and accordingly each of these must be separate objects.
![MVC pattern](/public/powerpointSlides/mvc.PNG)
* The Model consists of pure application data which in our application has been fulfilled by the MongoDB Atlas.
* The View serves the purpose of presenting the model’s data to the user. The view can access the model’s data but doesn't know how the user can manipulate or use this data. In our project, the view is served by the React.
* The Controller exists between the view and model. It basically listens to the events which are triggered by the view and executes the actions required for these events. The reaction can be a call to a method, And as the model and view are connected through a notification mechanism, the result of the event is automatically reflected in the view. In our project, the controller is Spring Boot.

### Design Principle
#### Open-Closed Principle
For this application, we are following the open-closed principle. The open-closed principle states that "software entities(classes, modules, functions, etc) should be open for extension, but closed for modification", which basically means that one should be able to extend a class behavior without actually modifying the class.

### Deployment URLs
#### Customer Page
The Customer/User page is deployed on https://master.d1q95m7fvorcmw.amplifyapp.com/. The website can be logged in using Google Sign-In credentials

#### Restaurant Manager Page
The Restaurant Manager Page is deployed on https://restaurantmanager.d1q95m7fvorcmw.amplifyapp.com/. The website can be accessed only if it is added into the database by the admin.

#### Admin
The Admin Page is deployed on https://admin.d1q95m7fvorcmw.amplifyapp.com/. The Admin can add and remove the restaurants.

### System Requirement Documentation
The System requirement documentation and complete README can be found here https://drive.google.com/drive/folders/1IuRwx8hAGrffIJM8KWWeW4zs5vZcGx9K?usp=sharing 
