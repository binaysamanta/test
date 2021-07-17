const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCabInput(data) {
    let errors = {};
    data.cabcategory = !isEmpty(data.cabcategory) ? data.cabcategory : '';
    data.cab_owner_name = !isEmpty(data.cab_owner_name) ? data.cab_owner_name : '';
    data.cab_owner_mobile = !isEmpty(data.cab_owner_mobile) ? data.cab_owner_mobile : '';
    data.cab_no = !isEmpty(data.cab_no) ? data.cab_no : '';
    data.cab_model = !isEmpty(data.cab_model) ? data.cab_model : '';
    data.facility = !isEmpty(data.facility) ? data.facility : '';
    data.cab_run_catgory = !isEmpty(data.cab_run_catgory) ? data.cab_run_catgory : '';
    data.location = !isEmpty(data.location) ? data.location : '';
    data.ac = !isEmpty(data.ac) ? data.ac : '';
    data.music_sys = !isEmpty(data.music_sys) ? data.music_sys : '';
    
    data.front_photo = !isEmpty(data.front_photo) ? data.front_photo : '';
    data.back_photo = !isEmpty(data.back_photo) ? data.back_photo : '';
    data.front_dash_photo = !isEmpty(data.front_dash_photo) ? data.front_dash_photo : '';
    data.back_seat_photo = !isEmpty(data.back_seat_photo) ? data.back_seat_photo : '';
    data.latest_smart_card = !isEmpty(data.latest_smart_card) ? data.latest_smart_card : '';
    data.latest_smart_card_second = !isEmpty(data.latest_smart_card_second) ? data.latest_smart_card_second : '';
    data.latest_tax_token = !isEmpty(data.latest_tax_token) ? data.latest_tax_token : '';
    data.latest_insurance_recipt = !isEmpty(data.latest_insurance_recipt) ? data.latest_insurance_recipt : '';
    data.latest_car_permit = !isEmpty(data.latest_car_permit) ? data.latest_car_permit : '';
    data.latest_lease_agreement = !isEmpty(data.latest_lease_agreement) ? data.latest_lease_agreement : '';




    if(Validator.isEmpty(data.cabcategory)) {
        errors.cabcategory = 'Cabcategory Name field is required';
    }

    if(Validator.isEmpty(data.cab_owner_name)) {
        errors.cab_owner_name = 'Cab Owner Name field is required';
    }

    if(!Validator.isLength(data.cab_owner_mobile, {min: 10, max: 10})) {
        errors.cab_owner_mobile = 'mobile no must have 10 number';
    }

    if(Validator.isEmpty(data.cab_no)) {
        errors.cab_no = 'Cab no field is required';
    }
    
    if(Validator.isEmpty(data.cab_model)) {
        errors.cab_model = 'Cab model no field is required';
    }

    if(Validator.isEmpty(data.cab_run_catgory)) {
        errors.cab_run_catgory = 'Cab model no field is required';
    }
  
   
    if(Validator.isEmpty(data.location)) {
        errors.location = 'Location field is required';
    }
    
    if(Validator.isEmpty(data.ac)) {
        errors.ac = 'AC field must be required';
    }

    if(Validator.isEmpty(data.front_photo)) {
        errors.front_photo = 'Frontn photo is required';
    }

    if(Validator.isEmpty(data.back_photo)) {
        errors.back_photo = 'Back photo is required';
    }

    if(Validator.isEmpty(data.front_dash_photo)) {
        errors.front_dash_photo = 'Front Dash Photo is required';
    }

    if(Validator.isEmpty(data.back_seat_photo)) {
        errors.back_seat_photo = 'Back seat photo is required';
    }

    if(Validator.isEmpty(data.latest_smart_card)) {
        errors.latest_smart_card = 'Latest smart card is required';
    }

    if(Validator.isEmpty(data.latest_smart_card_second)) {
        errors.latest_smart_card_second = 'Latest smart card second Doc is required';
    }

    if(Validator.isEmpty(data.latest_tax_token)) {
        errors.latest_tax_token = 'Latest tax token Doc is required';
    }

    if(Validator.isEmpty(data.latest_insurance_recipt)) {
        errors.latest_insurance_recipt = 'Latest insurance recipt Photo is required';
    }

    if(Validator.isEmpty(data.latest_car_permit)) {
        errors.latest_car_permit = 'Latest car permit is required';
    }

    if(Validator.isEmpty(data.latest_lease_agreement)) {
        errors.latest_lease_agreement = 'Latest lease agreement is required';
    }
    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}