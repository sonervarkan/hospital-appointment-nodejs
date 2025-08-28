const express=require("express");
const router=express.Router();
const db=require("../utilities/database");

router.get("/list_patient", (req,res)=>{
    const sql="select * from patient";
    db.query(sql,(err,results)=>{
        if(err) throw err;
        res.render("list_patient",{patients:results});
    });
});

module.exports=router;