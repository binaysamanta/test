const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const mongooes =require('mongoose');

const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const validatePasswordInput = require('../validation/changepassword');
var nodemailer = require("nodemailer");
var async = require('async');
var crypto = require("crypto");
var http = require('http');

const User = require('../models/User');


router.route('/').get((req,res)=>{
    User.find()
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error:'+err));
    
});



module.exports = router;