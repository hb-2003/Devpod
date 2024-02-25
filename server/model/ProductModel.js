const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startdate: {
        type: Date,
        required: true
    },
    expairitydate: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: Number,
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
exports.Product = mongoose.model('Product', productSchema);


   
