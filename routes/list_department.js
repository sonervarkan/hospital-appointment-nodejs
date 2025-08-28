const express = require("express");
const router = express.Router();
const db=require("../utilities/database");

router.get("/list_department", (req, res) => {

    const sql="select * from department";
    
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.render("list_department", {departments:results});
    })

    
});

module.exports = router;
