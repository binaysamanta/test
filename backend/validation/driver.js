const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateDriverInput(data) {
    let errors = {};
    data.drivername = !isEmpty(data.drivername) ? data.drivername : '';
    data.mobile = !isEmpty(data.mobile) ? data.mobile : '';
    data.altmobile = !isEmpty(data.altmobile) ? data.altmobile : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.address = !isEmpty(data.address) ? data.address : '';
    data.adharno = !isEmpty(data.adharno) ? data.adharno : '';
    data.adharfile = !isEmpty(data.adharfile) ? data.adharfile : '';
    data.adharsecondfile = !isEmpty(data.adharsecondfile) ? data.adharsecondfile : '';
    data.driverlicence = !isEmpty(data.driverlicence) ? data.driverlicence : '';
    data.driverlicence_doc = !isEmpty(data.driverlicence_doc) ? data.driverlicence_doc : '';
    data.driverlicence_doc_second = !isEmpty(data.driverlicence_doc_second) ? data.driverlicence_doc_second : '';
    data.driver_photo = !isEmpty(data.driver_photo) ? data.driver_photo : '';

    if(!Validator.isLength(data.drivername, { min: 2, max: 30 })) {
        errors.drivername = 'Drivername Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.drivername)) {
        errors.drivername = 'Drivername Name field is required';
    }

    if(!Validator.isLength(data.mobile, {min: 10, max: 10})) {
        errors.mobile = 'mobile non must have 10 number';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(Validator.isEmpty(data.address)) {
        errors.address = 'Address is required';
    }

    if(Validator.isEmpty(data.adharno)) {
        errors.adharno = 'Adhar number is required';
    }

    if(Validator.isEmpty(data.adharsecondfile)) {
        errors.adharsecondfile = 'Adharfile is required';
    }

    if(Validator.isEmpty(data.adharfile)) {
        errors.adharfile = 'Adharfile is required';
    }

    if(Validator.isEmpty(data.driverlicence)) {
        errors.driverlicence = 'Driverlicence is required';
    }

    if(Validator.isEmpty(data.driverlicence_doc_second)) {
        errors.driverlicence_doc_second = 'Driverlicence Doc is required';
    }

    if(Validator.isEmpty(data.driverlicence_doc_second)) {
        errors.driverlicence_doc_second = 'Driverlicence Doc is required';
    }

    if(Validator.isEmpty(data.driver_photo)) {
        errors.driver_photo = 'Driver Photo is required';
    }
       

    return {
        errors,
        isValid: isEmpty(errors)
    }
}