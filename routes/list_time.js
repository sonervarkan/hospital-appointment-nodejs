const express=require("express");
const router=express.Router();
const db=require("../utilities/database");

router.get("/list_time",(req,res)=>{
    const sql="select * from times";
    db.query(sql,(err,results)=>{
        if(err) throw err;
        res.render("list_time", {times:results});
    });
});

module.exports=router;