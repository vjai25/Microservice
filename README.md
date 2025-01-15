# Microservice

1. Create a Microservice
A microservice is a small, independent service that performs a specific task. We’ll create a simple Node.js-based microservice.

Step 1.1: Set Up Your Project
Create a project directory:

mkdir microservice-demo
cd microservice-demo

mkdir microservice-demo: Creates a new directory named microservice-demo.
cd microservice-demo: Navigates into that directory.
Initialize a Node.js project:

npm init -y

Creates a package.json file with default settings to manage dependencies.
Install necessary dependencies:

npm install express

express: A lightweight web framework for building APIs.


Step 1.2: Write the Microservice Code
Create the main file:

touch index.js
touch index.js: Creates an empty file named index.js.


Add the following code to index.js:

const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, this is a simple microservice!');
});

// Start the server
app.listen(port, () => {
    console.log(`Microservice running at http://localhost:${port}`);
});


Explanation:
require('express'): Loads the Express library.
app.get('/'): Defines an API route at / that responds with a message.
app.listen(port): Starts the server on port 3000.
Step 1.3: Run the Microservice
Start the server:


node index.js
This runs the server, which will be accessible at http://localhost:3000.
Test the API:

Open a browser or use a tool like curl or Postman to test the endpoint.
Example:


curl http://localhost:3000
Output: Hello, this is a simple microservice!
