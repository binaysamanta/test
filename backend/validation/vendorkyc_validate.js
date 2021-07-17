const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateVendorKYCInput(data) {
    let errors = {};
    vendor_adhar_file = !isEmpty(data.vendor_adhar_file) ? data.vendor_adhar_file : '';
    vendor_pan_file = !isEmpty(data.vendor_pan_file) ? data.vendor_pan_file : '';
    vendor_cancel_check_file = !isEmpty(data.vendor_cancel_check_file) ? data.vendor_cancel_check_file : '';
    vendor_photo = !isEmpty(data.vendor_photo) ? data.vendor_photo : '';
    

    

    if(Validator.isEmpty(vendor_adhar_file)) {
        errors.vendor_adhar_file = 'Aadhar file is required';
    }
    if(Validator.isEmpty(vendor_pan_file)) {
        errors.vendor_pan_file = 'PAN file is required';
    }
    
    if(Validator.isEmpty(vendor_cancel_check_file)) {
        errors.vendor_cancel_check_file = 'Cancel Check is required';
    }
    if(Validator.isEmpty(vendor_photo)) {
        errors.vendor_photo = 'Photo is required';
    }
   

    return {
        errors,
        isValid: isEmpty(errors)
    }
}