// //to init the server 
// const express = require('express');
// const app = express();
// const PORT = 3000;

// let data = ["mhark"]

// app.use(express.json()); // middleware to parse JSON request bodies
// // configure the server to interpret ENDPOINT http verbs(method) && routes or path
// // to do that invoke arguements to the app.get() method
// // first argument is the route(/), second is a callback function

// //any 200 status code is a success
// // 404 is not found
// // 500 is internal server error
// // 400 is bad request   
// //403 is forbidden
// app.get('/', (req, res) => {
//     console.log('Request received at /');
//     res.send(`
//         <body>
//         <p>
//             data: ${JSON.stringify(data)}<br>
//         </p>
//         </body>
//         `); // send a response to the client
// })
// app.get ('/dashboard', (req, res)=>{
//     console.log('Request received at /dashboard');
//     res.send('Welcome to the dashboard');
// } )

// app.get('/api/data', (req, res) => {
//     console.log('Request received at /api/data');
//     res.send(data); // send data as JSON response
// });

// app.post('/api/data', (req, res)=> {
//     const newData = req.body; 
//     console.log( newData);
//     data.push(newData.name)
//     res.sendStatus(201)// send a response with status 201 (created)
// })

// app.delete('/api/data', (req, res) =>{
//     data.pop()
//     res.sendStatus(203); // send a response with status 204 (no content)
// })

// // make hte server listen to the port (http://localhost:3000)
// app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

const express = require('express');
const app = express();

app.use(express.json()); // middleware to parse JSON request bodies
const PORT = 3000;

let data = {
    name: 'mhark',
};

app.get('/', (req, res) =>{
    res.send(`
        <body>
        <p>
        ${JSON.stringify(data)}</p>
        </body>
        `)
})

app.post('/api/users', (req, res) => {
    const newEntry = req.body;
    data.push(newEntry.name);
    res.sendStatus(200);
})
app.get('/api/users', (req, res) => {
    res.send('Hiii')
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})