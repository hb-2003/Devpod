const mongoose = require('mongoose');

const sallerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        validate:{
            validator: function(v){
                return v.length > 6;
            },
            message: "Password must be at least 6 characters long"
        }
    },
    phone:{
        Type:Number,
        
        
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    sallerid:{
        type :String,
        
    }
});

exports.Saller = mongoose.model('Saller', sallerSchema);