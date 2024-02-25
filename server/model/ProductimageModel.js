const mongoose = require('mongoose');

const productimageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    productid: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: true
    }
});
exports.Productimage = mongoose.model('Productimage', productimageSchema);