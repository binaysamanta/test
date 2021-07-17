const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePasswordInput(data) {
    let errors = {};
    
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirmpassword = !isEmpty(data.confirmpassword) ? data.confirmpassword : '';

    

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.password,{min: 6})) {
        errors.password = 'Password should be 6 characters';
    }

    

    if(Validator.isEmpty(data.confirmpassword)) {
        errors.confirmpassword = 'Confirm Password is required';
    }
    if(!Validator.isLength(data.confirmpassword, {min: 6})) {
        errors.confirmpassword = 'Confirm Password must have 6 characters';
    }

    if(!Validator.equals(data.password, data.confirmpassword)) {
        errors.confirmpassword = 'Password and Confirm Password must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}