const express  = require('express');

const app = express();

console.log('Server started ...')

const EXPRESS_P = 3000

const debug = require('debug')('express');

app.get('/', (req, res) => {
    res.send('welcome to the testing api test automate ... (naaaaamosan kaaar ko!!!)  ');
});

app.listen(EXPRESS_P, err => {
    if (!err) {
        debug(`express web server in runnong at port${EXPRESS_P}`)
    }
});
