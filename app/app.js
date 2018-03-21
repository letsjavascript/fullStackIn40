const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const path = require('path');
const config = require('../config/config.js');

app.use(bodyParser.urlencoded({extended: true}));


//set up routes

//home
app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname + '/../views/home.html'));
});

//add user data
app.get('/addSomeData', (req,res) => {
		console.log('TODO: Send the user a html form that they can fill in');
		res.send('Add Data');
});

app.post('/addSomeData', (req,res) => {
		data = req.body;
		console.log(data);
		console.log('TODO: put some data in the database using knex and inform the user');
		res.send('Add Data');
});

//delete user data
app.post('deleteSomeData', (req,res) => {
	dataToDelete = req.body;
	console.log(dataToDelete);
	console.log('TODO: Send the user a confirmation that they are about to delete this data');
	console.log('Then if they confirm send knex call to delete user');
	res.send('Delete Data');
});

//view user data
app.get('/seeSomeData', (req,res) => {
	console.log('TODO: Create a frontend that displays all the data from db');
	res.send('View Data');
});

//start the server
console.log('Server listening on port ' + config.server.port);
app.listen(config.server.port);
