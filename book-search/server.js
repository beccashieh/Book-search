const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

//Configure body-parser for the requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Static Assets
app.use(express.static('client/build'));
//Add API and view routes
app.use(routes);

mongoose.Promis = global.Promise;
//Connect to the mongo db
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
    {
        useMongoClient: true
    }
);

//Start server connection on API side.
app.listen(PORT, function() {
    console.log(`API server is now listening on PORT ${PORT}`);
});