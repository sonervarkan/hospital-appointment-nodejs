const express=require("express");
const router=express.Router();
const db=require("../utilities/database");

router.get("/add_time",(req,res)=>{
    res.render("add_time");
});

router.post("/add_time",(req,res)=>{
    const {hour}=req.body;
    const sql="insert into times (hour) values(?)";
    db.query(sql,[hour],(err,results)=>{
        if(err) throw err;
        res.redirect("list_time");
    });
});

module.exports=router;