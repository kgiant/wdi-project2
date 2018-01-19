<img width="229" alt="screen shot 2018-01-19 at 9 23 28 am" src="https://user-images.githubusercontent.com/9730370/35146615-747a61de-fd03-11e7-929a-2adec45d0553.png">
#WDI-Project2
##About
###Project Context
The following work was delivered as part of the coursework of the Full-Stack Web Development Immersive course @ General Assembly, London (#WDI31) and is my first full-stack application!

###The Vision
To develop an application that will serve as a resource for enthusiasts of  individual sports, and in this specific implementation for Alpine Ski Racers. It will provide information about:
	* Racers
	* Teams
	* Events
	* Results
	* News
and will be managed by Users (Admin, Team Managers).

###Project Review
I had a clear plan set out on day one and managed to stick with it for most of the way.
![devplan](https://user-images.githubusercontent.com/9730370/35150222-791f450c-fd11-11e7-8121-ba3240f2f3c7.png)
The challenge was that I tried to do something more complex than possibly appropriate here, that boosted the complexity of some work and did not allow me to delivered as envisioned. At the end of the day the biggest victim was the UI which hardly changed after the initial setup, beauty and responsiveness going out of the window ... Overall, I am very happy with the learning journey, just wish I had a bit more time for a better access & authentication implementation.
The public access of the project and github repository are at
[Heroku](https://immense-temple-93342.herokuapp.com/) and [Github](https://github.com/kgiant/wdi-project2) respectivelly.


##The Application
###Technology Stack
The technology stack and tools used for the deployed application include HTML/SCSS, JQuery, Javascript, Node, Express, Ajax, MongoDB/Mongoose, Bootstrap, bcrypt. More specifically the dependencies list includes
dependencies:
* "bcrypt": "^1.0.3",
* "bluebird": "^3.4.7",
* "body-parser": "^1.18.2",
* "ejs": "^2.5.6",
* "express": "^4.14.1",
* "express-ejs-layouts": "^2.2.0",
* "express-flash": "^0.0.2",
* "express-session": "^1.15.6",
* "method-override": "^2.3.10",
* "mongoose": "^5.0.0-rc2",
* "morgan": "^1.8.1"

devDependencies": 
* "babel-core": "^6.26.0",
* "babel-preset-env": "^1.6.1",
* "browser-sync": "^2.23.5",
* "gulp": "^3.9.1",
* "gulp-babel": "^7.0.0",
* "gulp-clean": "^0.4.0",
* "gulp-clean-css": "^3.9.2",
* "gulp-nodemon": "^2.2.1",
* "gulp-notify": "^3.1.0",
* "gulp-plumber": "^1.2.0",
* "gulp-sass": "^3.1.0",
* "gulp-sourcemaps": "^2.6.3",
* "gulp-uglify": "^3.0.0",
* "run-sequence": "^2.2.1"

###Wireframes
Tried to minimize the number of HTML templates necessary. In total 4 templates were used:
1. Homepage
2. Forms (CU user, racer, event, results, post)
3. Directory listing (RD user, racer, event, results, post)
4. Profile (R user, racer, event, results, post)
In the image below the Event mockup shows how at the lower part of the Profile templated two elements will be added to accommodate for the Weather Forecast and Map API inputs if time permits.
![screen shot 2018-01-13 at 2 21 18 pm](https://user-images.githubusercontent.com/9730370/35149651-e652ae1e-fd0e-11e7-925c-d5dcfe46fad5.png)

###Models & Data
The diagram below provides an outline of the relationships between the different entities. In brief, the primary USER (say a team manager) will CRUD a team (or many), racers, news posts, with the latter relating to a team. e.g. team members and team news.
![screen shot 2018-01-19 at 12 15 20 am](https://user-images.githubusercontent.com/9730370/35149591-98386aac-fd0e-11e7-8071-4076f5ea6afb.png)
Sample data for teams, racers, news, events and results are included in the db/seeds.js file.

###Application Overview
The following screenshots provide a quick run-through the application. There is a public and a registered user view of the site.

#####Homepage: this is static for now as the desired references were not completed.
![screen shot 2018-01-19 at 12 46 01 am](https://user-images.githubusercontent.com/9730370/35149655-e69799a2-fd0e-11e7-8092-8e5d37ce13d1.png)
#####Teams Directory: fully functional with CUD functionality available only to the logged in user. Did not have time to limit UD functionality to own teams only. The news widget draws news from the article dataset. It is a Partials file.
![screen shot 2018-01-19 at 12 46 58 am](https://user-images.githubusercontent.com/9730370/35149656-e6b42004-fd0e-11e7-9f87-d9e7e11d6841.png)
#####Racer Directory similarly functional with CUD functionality available only to the logged in user. The Ladies and Men tabs filter results by gender. Did not have time to limit UD functionality to own racers only. The news widget draws news from the article dataset.
![screen shot 2018-01-19 at 12 47 33 am](https://user-images.githubusercontent.com/9730370/35149657-e6cef55a-fd0e-11e7-8a07-544246b5141b.png)
#####Racer profile similarly functional with CUD functionality available only to the logged in user. The tabular container under the picture was intended to host personal results, racer gallery and more info.
![screen shot 2018-01-19 at 12 48 27 am](https://user-images.githubusercontent.com/9730370/35149658-e6e9da96-fd0e-11e7-8998-5b56b26646e1.png)
#####Events directory
![screen shot 2018-01-19 at 12 49 14 am](https://user-images.githubusercontent.com/9730370/35149659-e6fec1ea-fd0e-11e7-9b90-67be2295c83d.png)
#####Results Directory
![screen shot 2018-01-19 at 12 49 31 am](https://user-images.githubusercontent.com/9730370/35149660-e71592b2-fd0e-11e7-8563-a6848ebce74c.png)
#####News - CRUD functionality
![screen shot 2018-01-19 at 12 49 57 am](https://user-images.githubusercontent.com/9730370/35149661-e73cd124-fd0e-11e7-9f10-799fac7c8115.png)
#####Users Directory: fully functional with CUD functionality available only to the logged in user (team manager)and for own profile only. So, can see other team managers but not UD. Further, the logged in user can see more information about the other users than someone who is not logged in, in this case their emails.
![screen shot 2018-01-19 at 2 05 14 am](https://user-images.githubusercontent.com/9730370/35149664-e853d558-fd0e-11e7-81d9-e235e07abe09.png)
#####Sample Form
![screen shot 2018-01-19 at 12 56 54 am](https://user-images.githubusercontent.com/9730370/35149663-e8391484-fd0e-11e7-971d-38086e606a8c.png)
####API Integration
The initial setup for google maps integration was done and a map appears at the racer profile and the team profile. The intention was to use form input to show the racer's favorite ski-spot and the team's HQ. Initially I was also hopping to include a weather forecast API in the events pages.

##Technical deliverables
In brief, the following where delivered and are included in this repository
* development plan and wireframes
* views/basic html templates with mininmal styling and no responsive design
* 6 models and sample data, of which the 4 were those that were used for this release's features
* routers & controllers completed for the 4 models
* partial referencing
* single user type authentication & sessions
* flash messages
* initial setup for google maps
*

###Things to do next:
Obviously this list extends to infinity, but my next priorities would be
* complete referencing and explore related content across views using the user, racer, team and news models
* complete implementation of the google maps api adding it to racer, team and event profiles
* complete implementation of super admin. A user-role field is already part of the user model and sets online registers at a default value.
* UI!!!
* develop events and results, and use the FIS xml feed to automatically load the latest results
* 

###Things uploaded but not working:
The events and results sections were dropped after the first couple of days and even though the basic models and views are in place, not much functionality has been add and 