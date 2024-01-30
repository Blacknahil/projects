
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: [5, "Has to be atleast 5 characters!"],
        maxLength: [20, "Can't be more than 20 characters!"]
        
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['Parent/Student', 'Tutor', 'Agency'],

    },
    address: {
        type: String,
        maxLength: [35, "Can't be more than 35 characters!"]
    }

});

userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        } 
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    }
    catch (error) {
        return next(error);
    }
  });
userSchema.plugin(passportLocalMongoose);
const user = mongoose.model('user', userSchema);

module.exports = user;


