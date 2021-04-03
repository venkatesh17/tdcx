var mongoose = require('mongoose');

//require chalk module to give colors to console text
var chalk = require('chalk');

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;




const eventEmitter = require('events');
global.connectedMongoEmitter = new eventEmitter();


global.connectedMongoEmitter = new eventEmitter();
global.db = mongoose.createConnection('mongodb+srv://venkatesh:YP@venky17@cluster0-86ec4.mongodb.net/tdcx?retryWrites=true&w=majority', { useNewUrlParser: true })

db.once('open', () => { 
   connectedMongoEmitter.emit('connectedMongoDB')
   console.log('Connection has been established successfully for MongoDB');   
});


                                                                                                 