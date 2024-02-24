const mongodb = require('mongodb');


let userSchema = new mongodb.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        middelName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
            trim: true
        },
        password: {
            type: String,
            required: true,
            validate: [
                function (password) {
                    return password.length >= 6;
                },
                'Password should be longer'
            ]

        },
        birthdate: {
            type: Date,
            required: true,
            validate: [
                function (birthdate) {
                    return birthdate < new Date();
                },
                'Birthdate should be in the past'
            ]
        },
        mobile: {
            type: Number,
            required: true,
            validate: [
                function (mobile) {
                    return mobile.length == 10;
                },
                'Mobile number should be 10 digits long'
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
exports.User = mongodb.model('User', userSchema);