const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    profilepic: {
        type: String
    },
    vid: {
        type:Number,
        default:0
    },
    vidtext: {
        type: String
    },
    status: {
        type: String,
        default:0
    },
    user_verify: {
        type: String,
        default:0
    },
	comm_type: {
        type: String,
        default:1  //1 for Commission, 2 for monthly subcription
    },
    comm_date: {
        type: Date
    },
    avaliable: {
        type: String,
        default:0
    },
    type: {
        type: String,
        default:1
    },
    driver_type: {
        type: String, //1 ->car driver, 2->bike driver
        default:1
    },
    user_lat: {
        type: String
    },
    user_long: {
        type: String
    },
    refer_amount: {
        type: String,
        default:0
    },
    reset: {
        type: String,
        default:0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;