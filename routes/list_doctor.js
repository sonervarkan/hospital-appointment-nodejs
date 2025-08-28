const express = require("express");
const router = express.Router();
const db=require("../utilities/database");

router.get("/list_doctor", (req, res) => {

    const sql="select * from doctor d join department de on d.departmentno=de.department_no";
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.render("list_doctor", {doctors:results});
    })
    
});

module.exports = router;