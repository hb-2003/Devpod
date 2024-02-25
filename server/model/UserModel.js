const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            // required: true,
            trim: true
        },
        middelName: {
            type: String,
            // required: true,
            trim: true
        },
        lastName: {
            type: String,
            // required: true,
            trim: true
        },
        email: {
            type: String,
            // required: true
        },
        password: {
            type: String,
            // required: true,
            validate: [
                function (password) {
                    return password.length >= 6;
                },
                'Password should be longer'
            ]

        },
        birthdate: {
            type: Date,
            // required: true,
            validate: [
                function (birthdate) {
                    return birthdate < new Date();
                },
                'Birthdate should be in the past'
            ]
        },
        mobile: {
            type :String,
        
            // required: tru
            validate : [
                function(mobile){
                    return mobile.length >= 10;
                },
                'Mobile should be longer'
            ]

        },

        date: {
            type: String,
            default: Date.now
        },


    }, {
    timestamps: true,
}
);
module.exports = mongoose.model('users', userSchema);