const mongoose = require('mongoose');

const liquorSchema = new mongoose.Schema({
    brandType: {
        type: String,
        required: true,
    },
    liquorname: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: { 
        data: Buffer, 
        contentType: String 
     },
    liquorType: [
        {
            value: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
        }
    ]
});

// Connects userSchema with the "Users" collection
module.exports = mongoose.model('liquor', liquorSchema);
