const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');


var taskSchema = new mongoose.Schema({

    name: {
        type: String,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    },
    display:{
        type:Boolean,
        default: true
    }
},{
    collection: "listOfTasks"
});

module.exports = {
    taskSchemaModel: db.model("taskSchemaModel", taskSchema)
}
