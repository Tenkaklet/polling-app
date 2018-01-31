const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;

// Mongoose connect
mongoose.connect('MLAB or Local db here')
.then(() => {
    console.log('Mongoose Connected');
})
.catch(err => {
    console.log(err);
});