const mongoose = require('mongoose');

const buisnessDetail = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    buisness_name: {
        type: String,
    },
    buisness_logo: {
        type: String,
    },
    buisness_address: {
        type: String,
    },
    suburb: {
        type: String,
    },
    post_code: {
        type: String,
    },
    state: {
        type: String,
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('buissness', buisnessDetail)