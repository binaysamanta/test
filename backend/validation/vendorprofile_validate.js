const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateVendorProfileInput(data) {
    let errors = {};
    vendorname = !isEmpty(data.vendorname) ? data.vendorname : '';
    emailid = !isEmpty(data.emailid) ? data.emailid : '';
    mobile_no = !isEmpty(data.mobile_no) ? data.mobile_no : '';
    address1 = !isEmpty(data.address1) ? data.address1 : '';
    address2 = !isEmpty(data.address2) ? data.address2 : '';
    city = !isEmpty(data.city) ? data.city : '';
    state = !isEmpty(data.state) ? data.state : '';
    country = !isEmpty(data.country) ? data.country : '';
    zipcode = !isEmpty(data.zipcode) ? data.zipcode : '';
    bankaccountholdername= !isEmpty(data.bankaccountholdername) ? data.bankaccountholdername : '';
    bankname= !isEmpty(data.bankname) ? data.bankname : '';
    bankaccountnumber= !isEmpty(data.bankaccountnumber) ? data.bankaccountnumber : '';
    bankifcicode= !isEmpty(data.bankifcicode) ? data.bankifcicode : '';
    bankupiid= !isEmpty(data.bankupiid) ? data.bankupiid : '';

    

    if(Validator.isEmpty(vendorname)) {
        errors.vendorname = 'Vendor name is required';
    }
    /*if(Validator.isEmpty(emailid)) {
        errors.emailid = 'Email is required';
    }*/
    if(Validator.isEmpty(mobile_no)) {
        errors.mobile_no = 'Mobile no. is required';
    }
    if(!Validator.isLength(mobile_no, { min: 10, max: 10 })) {
        errors.mobile_no = 'Mobile no.must be 10 character';
    }
    if(!Validator.isNumeric(mobile_no)) {
        errors.mobile_no = 'Mobile no. must be number';
    }
    if(Validator.isEmpty(address1)) {
        errors.address1 = 'Address Line1 is required';
    }
    if(Validator.isEmpty(address2)) {
        errors.address2 = 'Address Line2 is required';
    }
    if(Validator.isEmpty(city)) {
        errors.city = 'City is required';
    }
    if(Validator.isEmpty(state)) {
        errors.state = 'State is required';
    }
    if(Validator.isEmpty(country)) {
        errors.country = 'Country is required';
    }
    if(Validator.isEmpty(zipcode)) {
        errors.zipcode = 'Zipcode is required';
    }
    if(!Validator.isNumeric(zipcode)) {
        errors.zipcode = 'Zipcode must be number';
    }

    if(Validator.isEmpty(bankaccountholdername)) {
        errors.bankaccountholdername = 'bankaccountholdername is required';
    }

    if(Validator.isEmpty(bankname)) {
        errors.bankname = 'bankname is required';
    }

    if(Validator.isEmpty(bankaccountnumber)) {
        errors.bankaccountnumber = 'bankaccountnumber is required';
    }

    if(Validator.isEmpty(bankifcicode)) {
        errors.bankifcicode = 'bankifcicode is required';
    }

    if(Validator.isEmpty(bankupiid)) {
        errors.bankupiid = 'bankupiid is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}