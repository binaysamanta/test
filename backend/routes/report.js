const express = require('express');
const router = express.Router();
const mongoose =require('mongoose');
const excel = require("exceljs");
const Moment = require('moment');

let Reports =require('../models/Reports');




router.route('/add').post((req,res)=>{
    const customerId=req.body.customerId;    
    const invoiceId=req.body.invoiceId;
    

    const newReports =new Reports({
        customerId,
        invoiceId,
       
        
      
    });
    newReports.save()
    .then(()=>res.json('Record added!'))
    .catch(err=>res.status(400).json('Error' +err))
});



  //Earning Report for vendor
  router.route('/search').post((req, res) => {
  
      //var start = new Date(new Date(req.params.startDate).setHours(00, 00, 00));
      //var end = new Date(new Date(req.params.endDate).setHours(23, 59, 59));
      var start = req.body.startDate;
      var end = req.body.endDate;
  
      
        Reports.find({ createdAt: {$gte: start, $lt: end},})
        .then((objs) => {
          console.log(objs);
              let temp = [];
              let blankRow = [];

  
              objs.forEach((obj) => {
                temp.push({
                  createdAt: obj.createdAt,
                  customerId: obj.customerId,
                  invoiceId:obj.invoiceId,
                  
                });
                
              });


              blankRow.push({
                createdAt: '',
                customerId: '',
                invoiceId:'',
                
              });

             


                
              let workbook = new excel.Workbook();
              let worksheet = workbook.addWorksheet("Report");
  
              worksheet.columns = [
                { header: "createdAt", key: "createdAt", width: 25 },
                { header: "customerId", key: "customerId", width: 20 },
                { header: "invoiceId", key: "invoiceId", width: 20 },
                
              ];
  
              // Add Array Rows
              worksheet.addRows(temp);
              worksheet.addRows(blankRow);
              
              
              let fileName = "Report-"+Moment(req.params.fromdate).format('DD-MM-YYYY')+"-"+Moment(req.params.todate).format('DD-MM-YYYY') + ".xlsx";
  
              workbook.xlsx.writeFile("./uploads/report.xlsx").then(function() {
                res.status(200).send({ path: "/backend/uploads/" + fileName });
            });

          });
          
  
          
     
    });

router.route('/').get((req,res)=>{
   Reports.find({"type":2})
  .then(user=>res.json(user))
  .catch(err=>res.status(400).json('Error:'+err));
  
});

module.exports =router;