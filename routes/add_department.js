const express=require("express");
const router=express.Router();
const db=require("../utilities/database");


router.get("/add_department", (req, res) => {
    res.render("add_department");
})

router.post("/add_department", (req, res) => {
    const {departmentname}=req.body;
    const sql="insert into department (departmentname) values(?)";
    db.query(sql, [departmentname], (err, results) => {
        if(err) throw err;
        res.redirect("/list_department");
    })
})

module.exports=router;