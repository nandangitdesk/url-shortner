URL Shortener Project

Description
This is a backend URL shortening service that allows users to shorten long URLs into more manageable short URLs. The service tracks the usage of each short URL and provides an easy-to-use interface for managing and accessing the shortened URLs.

Features
Shorten long URLs into short, easy-to-share URLs.
Track the usage of each short URL with timestamps.
User authentication and authorization.
View engine setup with EJS for server-side rendering.
Middleware for cookie parsing and JSON handling.
Routes for URL shortening, user authentication, and static content serving.

Tech Stack
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing URL data.
Mongoose: ODM for MongoDB.
EJS: Embedded JavaScript templates.
Nodemon: Utility for automatically restarting the server during development.
jsonwebtoken: For handling JSON Web Tokens (JWT).
shortid & nanoid: Libraries for generating unique short IDs.

Prerequisites
Node.js: Ensure Node.js is installed on your system.
MongoDB: Make sure MongoDB is running on your system or use a cloud MongoDB service.

Installation
Clone the repository:
Copy code
git clone https://github.com/yourusername/short-url-project.git
cd short-url-project

Install the dependencies:

Copy code
npm install

Create a .env file and add your MongoDB connection string:

Copy code
MONGODB_URL=mongodb://localhost:27017/short-url
JWT_SECRET=your_jwt_secret

Start the server:

Copy code
npm start

Project Structure
index.js: Entry point of the application.
connection.js: Handles the connection to MongoDB.
models/: Contains Mongoose models for the application.
routes/: Contains the route handlers for the application.
middlewares/: Contains middleware functions for authentication and authorization.
views/: Contains EJS templates for server-side rendering.

Usage
Shortening a URL
To shorten a URL, send a POST request to /url with the long URL in the request body. Example:

Accessing a Shortened URL
To access a shortened URL, navigate to http://localhost:8000/url/:shortId, where :shortId is the unique ID generated for the short URL. The server will redirect you to the original long URL.

User Authentication
This project includes routes for user registration and login. You can access these routes at:

/user/register (POST): Register a new user.
/user/login (POST): Log in an existing user.

Authentication is handled using JSON Web Tokens (JWT).
