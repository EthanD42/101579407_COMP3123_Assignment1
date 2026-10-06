#  The COMP3123 Assignment 1 - Employee Management REST API

## description
the prject is a restful  api that mangeses users and  their employee records. This application uses node, express, mongoose and also mongoDB the api uses things like user registration and login, crud operations, input validation, passwrod hashing ownership, rate limitnig and more

## Technologies used
some of the technologeis I used in this assignent were, express rate limiter, express validator, helmat, morgan, node, express, mongoDB, mongoose, JWT, and bscrypt

## instalation
1. make the project in the term with "npm init -y"

2. install the needed dependicies with npm

3. create a .env file and add the needed environment varibles like the mongoDb connection and the port and the JWT secret

4. start the mongoDB docker container with  docker run -d --name comp3123-mongodb -p 27017:27017 -e MONGO_INITDB_DATABASE=comp3123_assignment1 mongo:latest

5. start the program with npm start in the terminal

6.  then the api will run at http://localhost:3000


## env varibles

you need three env vars for this project in your env file they are

PORT=3000
MONGODB_URI=mongodb://localhost:27017/comp3123_assignment1
JWT_SECRET=yoursecrethere

env will and should not be put in github you can look at the env example file


## The API Endpoints

### User Auth 
- POST /api/v1/user/signup - Register a new user
- POST /api/v1/user/login - Login using  your username or email and password

### Employee
- POST /api/v1/emp/employees - Create a new employee
- GET /api/v1/emp/employees - Get all employees belonging to your user
- GET /api/v1/emp/employees/:eid - Get a specific employee by their id
- PUT /api/v1/emp/employees/:eid - Update a specific employee using their id
- DELETE /api/v1/emp/employees?eid=abc - Delete a specific employee using their id

### The Health Check
- GET `/health` - Check if the API is running good


## Authentication

The api uses JWT auth, so the protected employee endpoints need a vlid user JWT token in order for them to work.  onc eyou log in make sure to put your toekn in the auth section of postman to use the protected endpoints.



## Security

- Passwords are encryped using bcrypt
- JWT authentication
- User ownership and acces control for the emplyees
- input validation
- rate limits


## Testing 

testing was done with postman

- User signup and login
- Employee create, read, update, and delete
- Input validation
- JWT authentication
- User ownership
- Duplicate users
- Invalid employee IDs
- Different HTTP status codes

