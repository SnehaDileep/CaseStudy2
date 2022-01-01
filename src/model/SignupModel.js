const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const SignupSchema = new Schema({
    fname : String,
    lname: String,
    password: String,
    cnfpswd: String
});

const signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = signupdata;