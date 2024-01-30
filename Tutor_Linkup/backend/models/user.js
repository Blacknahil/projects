const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minLength: [5, "Username must be at least 5 characters"],
        maxLength: [20, "Username can't be more than 20 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true, // Ensure email is unique
        match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Regex for email validation
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    role: {
        type: String,
        enum: ['Parent/Student', 'Tutor', 'Agency'],
        required: [true, "Role is required"]
    },
    address: {
        type: String,
        maxLength: [35, "Address can't be more than 35 characters"]
    },
    // Add other fields as needed
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

// Password hashing middleware
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
});

// Method to remove password from the response object
userSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
};

// Passport-Local Mongoose plugin for handling username and password
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;
