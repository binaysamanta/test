const mongoose =require('mongoose');

const Schema = mongoose.Schema;
const ReportsSchema = new Schema({
    
    
    customerId: {
        type: String,
        //required: true
    },
    invoiceId:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    date: {
        type: Date,
        default: Date.now
    }

});
const Reports = mongoose.model('reports', ReportsSchema);

module.exports = Reports;