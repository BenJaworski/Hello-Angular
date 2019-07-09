const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RestfulAPI_DB');
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());
require('./server/models/Task.js')(app);
require('./server/config/routes.js')(app);
app.listen(8000, function(){
	console.log("listening on port 8000");
})