 const express = require('express');
 const app = express();
 const port = 3000;

 // define a simple route

 app.get('/', (req, res) => {
        res.send('Hello this is simple microservices');
    });

// start the server
app.listen(port, () => {
    console.log(`Microservice running at http://localhost:${port}`)

} );
 
