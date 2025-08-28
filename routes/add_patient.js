const express=require("express");
const router=express.Router();
const db=require("../utilities/database");

router.get("/add_patient", (req,res)=>{
    res.render("add_patient");
});

router.post("/add_patient",(req,res)=>{
    const {patientname, patientsurname, patienttcno}=req.body;
    const sql="insert into patient (patientname, patientsurname, patienttcno) values (?,?,?)";
    db.query(sql, [patientname, patientsurname, patienttcno], (err,results)=>{
        if(err) throw err;
        res.redirect("list_patient");
    });
});

module.exports=router;