const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const CartSchema = new Schema({
    cartId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Cart', CartSchema);