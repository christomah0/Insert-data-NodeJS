// import modules
const express = require('express');
const path = require('path');
const app = express();

// port to listen to
const port = process.env.port || 3000;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// get / referenced index.html
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// get /form referenced form.html 
app.get('/form', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// get the success response 
app.get('/success', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'success.html'));
});

// api routes
app.use('/api', require('./routes/api'));

app.listen(port, () => console.log("Server started on port " + port));
