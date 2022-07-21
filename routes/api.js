// import modules
const express = require('express');
const router = express.Router();
const fs = require('fs');

// declares a variable for containing the id
let randomId = 1;

// add new user
router.post('/', (request, response) => {
    const newUser = {
        id: randomId,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        status: 'active'
    };

    // convert data to JSON format
    let jsonData = JSON.stringify(newUser, null, 2);

    if (fs.existsSync('userdata.json')) {
        // append user in the existed file
        fs.appendFile('userdata.json', jsonData, (err) => { if (err) throw err; });
        console.log('[+] User has been appended.');
    }
    else {
        // add the first user in a file
        fs.writeFile('userdata.json', jsonData, 'utf8', (err) => { if (err) throw err; });
        console.log('[+]First user has been added.');
    }

    // redirect to the success page
    response.redirect('/success');
});

// export the router
module.exports = router;
