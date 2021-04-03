const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const crypto = require('crypto');

const registerSchema = new mongoose.Schema({
    username:   {
                    type: String,
                    required: true,
                    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
                    unique: true, 
                    index: true
                },
    mailid:     {
                    type: String,
                    required: true,
                    match: [/\S+@\S+\.\S+/, 'is invalid'],
                    unique: true,
                    index: true
                },
    password:   { 
                    type: String, 
                    required:[true, "can't be block"],
                },
    repassword: {   type: String, 
                    required:[true, "can't be block"]
                }
    
},{
    timestamps: false,
    collection: "registerCol"
})



registerSchema.plugin(uniqueValidator, {message: "is already taken"})



module.exports = {
    registerSchemaModel: db.model("registerSchemaModel", registerSchema)
}