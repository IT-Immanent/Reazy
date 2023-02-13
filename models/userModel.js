const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    position: {
        type: String,
    },
    photo: {
        type: String,
    }
    
},
    {
        timestamps: true,
    })

module.exports = mongoose.model('User', userSchema)
