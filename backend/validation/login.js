const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.mobile = !isEmpty(data.mobile) ? data.mobile : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isLength(data.mobile,{min: 10, max: 10})) {
        errors.mobile = 'mobile is invalid';
    }

    if(Validator.isEmpty(data.mobile)) {
        errors.mobile = 'mobile is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}