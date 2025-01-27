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


2. Use Docker to Create an Image
Docker allows you to package your microservice along with its dependencies into an image.

Step 2.1: Create a Dockerfile
Create the file:
touch Dockerfile
Dockerfile: A file used to define the steps to create a Docker image.
Write the following content in Dockerfile:

dockerfile

# Use an official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the port
EXPOSE 3000

# Start the microservice
CMD ["node", "index.js"]


Explanation:
FROM node:16: Uses a Node.js image as the base.
WORKDIR /app: Sets /app as the working directory.
COPY package*.json ./: Copies package.json files.
RUN npm install: Installs dependencies.
COPY . .: Copies the app code into the image.
EXPOSE 3000: Opens port 3000.
CMD ["node", "index.js"]: Runs the service when the container starts.


//Step 2.2: Build the Docker Image
//Run the following command:

docker build -t microservice-demo .

//-t microservice-demo: Tags the image with the name microservice-demo.
//.: Specifies the current directory as the build context.

//Verify the image:
docker images

//Lists all Docker images, including microservice-demo.

//Step 2.3: Run the Docker Container
Start the container:
docker run -p 3000:3000 microservice-demo

//-p 3000:3000: Maps the container’s port 3000 to your local machine's port 3000.
microservice-demo: Specifies the image to use.
Test the container:

Visit http://localhost:3000 in your browser or use curl.


3. Deploy It to Kubernetes
Kubernetes allows you to deploy and manage containers at scale.

# Step 3.1: Create a Kubernetes Deployment
//Create a file named deployment.yaml:

touch deployment.yaml

// Add the following content:

apiVersion: apps/v1
kind: Deployment
metadata:
  name: microservice-demo
spec:
  replicas: 2
  selector:
    matchLabels:
      app: microservice-demo
  template:
    metadata:
      labels:
        app: microservice-demo
    spec:
      containers:
      - name: microservice-demo
        image: microservice-demo:latest
        ports:
        - containerPort: 3000

# Explanation:
// replicas: 2: Deploys two instances of the microservice.
// image: microservice-demo:latest: Specifies the Docker image to use.

# Step 3.2: Create a Service
// Add a service.yaml file:

touch service.yaml

//Add the following content:

apiVersion: v1
kind: Service
metadata:
  name: microservice-demo
spec:
  selector:
    app: microservice-demo
  ports:
  - protocol: TCP
    port: 3000
    targetPort: 3000
  type: LoadBalancer
Explanation:
type: LoadBalancer: Exposes the service outside the cluster.

# Step 3.3: Apply the Configurations
// Deploy to Kubernetes:
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
Verify the Deployment:


kubectl get pods
Lists all running pods.
Access the Service:

//Use the external IP provided by the LoadBalancer:

kubectl get service
End-to-End Flow Summary
Build and test the microservice locally.
Containerize it using Docker.
Deploy and scale it using Kubernetes.

