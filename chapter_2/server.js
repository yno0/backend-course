//to init the server 
const express = require('express');
const app = express();
const PORT = 3000;


// make hte server listen to the port (http://localhost:3000)
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

// configure the server to interpret http verbs && routes or path
// to do that invoke arguements to the app.get() method
// first argument is the path(/), second is a callback function
app.get('/', (req, res) => {
    // send a response to the client
    res.send('Hello World!');
});