const express=require("express");
const router=express.Router();
const db=require("../utilities/database");

router.get("/add_doctor", (req, res) => {
    const sql="select * from department";
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.render("add_doctor", {departments:results});
    })
})

router.post("/add_doctor", (req, res) => {
    const {doctornamesurname, department_no}=req.body;
    const sql="insert into doctor (doctornamesurname, departmentno) values(?, ?)";
    db.query(sql, [doctornamesurname, department_no], (err, results) => {
        if(err) throw err;
        res.redirect("/list_doctor");
    })      
})

module.exports=router;