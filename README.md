# Reading Club Website

This is the codebase for reading club website.

npm start should be called under the director of rc-server,
before doing it, install docker, and run 'docker-compose up' in command to up the initial database onto local machine. 

#Authentication Implementation

New Issues After Demo 1 
Here are the new issues after sql connection has been done.
There were some underestimate towards the project’s difficulty, some issues has to be rewrote.


What has been done:
I’m working on user login and signup function, a bit far away from implementing the authentication function right now.

a). Front-end
HTML page: Basically done.
CSS: A little, provides a bit ugly simple UI effects.
Models: Not set yet, and considering if it is needed front-end.
Service: Has been set, lots of work are needed.
Routes: front-end done.

b). Back-end
Server: Server able to provide API feed back, not stable, no error handling function.
Model: Model has been set, with the minimum requirement, need to be changed later, currently is only for the medium fidelity prototype.
Database: Database setup done, connect to local sql database, proper mapping required. Still lots of things left before deployment.
Controller: Still not sure what is going on with controllers in express, why we can't left all the work to routes. It is empty now.
Routes: API routes has been set, and able to get response, and access data from database.

c). Test
Add automated testing is a good option, and will greatly decrease the vulnerability for the project, nothing has been done so far, this will be left for later.

What is going on (Personal Sprint 1 - Personal Sprint 3):
First, all i’m doing now is towards the medium fidelity prototype which can provide a minimum viable product. The goal for current version is to provide ugly login and signup page for user, with the most basic model. Both the front-end and back-end should cause no trouble. Some test class will be done during this phase.
I will focus on back-end during current sprint (personal sprint 1), and then add proper service functions to front-end after the work on back-end (personal sprint 2). Automate test class will be added (personal sprint 3).
The sprints are bi-weekly based. The process time will be very depends on working speed, learning curve, personal time schedule, and the framework choice.

a). Personal Sprint 1
1. Finish RESTful API for user routes.
2. Implement proper mapping onto the model, so the connection between database model and the user model not as vulnerable.
3. Refactor route, extract functions and enrich them at userController.

b). Personal Sprint 2
1. Start on service part, let the service be able to hear from back-end, extract data from api.
2. Let the service be able to make what it heard from api into proper user (or this could be done during a.2 by data mapping, if so, this should be about link front-end user model to the back-end user model). 
3. Comment out some extra data on the signup form, so the page good to test the user with only two fields (id, password);
4. Link component behaviour to service.

c). Personal Sprint 3
1. Add test framework mocha, and chai.
2. Create proper test classes for RESTful routes, including controller test.
3. Create proper test classes for each component in front-end.
4. Add and fix the expectation for next phase, or personal sprint 4.

What should be done:
High fidelity prototype will be a upgrade version of the medium one, with more functionalities and more complex models, and better look. Authentication libraries implementation and automate test implementation will happen during this sprint as well.
Those are things that i’m considering for the high fidelity prototype, and it’s just some basic ideas, currently i’m focusing on the medium fidelity prototype.

a). Back-end
User model inrich, and user role setting.
Passport.js will be implemented, authentication added.
Authorization added, provide different user role with different accessibilities.

b). Front-end
After website designer provides the full design blueprint, new functions maybe needed, css will be implemented as well.


//5.28 data mapping attenmpt

1). //sequelize model mapping
//https://www.codementor.io/mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz
const User = UserModel(sequelize, db);
- Not working