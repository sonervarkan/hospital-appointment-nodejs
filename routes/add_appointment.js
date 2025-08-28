const express=require("express");
const router=express.Router();
const db=require("../utilities/database");

router.get("/add_appointment",(req,res)=>{
    const sqlDep="select * from department";
    db.query(sqlDep,(err,resultsDep)=>{
        if(err) throw err;
        const sqlDoc="select * from doctor";
        db.query(sqlDoc,(err,resultsDoc)=>{
            if(err) throw err;
            const sqlTime="select * from times";
            db.query(sqlTime,(err,resultsTime)=>{
                if(err) throw err;
              
                res.render("add_appointment",
                    {
                        departments:resultsDep,
                        doctors:resultsDoc,
                        times:resultsTime
                    });
            });
        });
    });
});

router.post("/add_appointment",(req,res)=>{
    const {patientname, patientsurname, patienttcno, department_no, doctor_no, appointmentdate, hours_no }=req.body;
    const sqlPatient="insert into patient (patientname, patientsurname, patienttcno) values (?,?,?)";
    db.query(sqlPatient,[patientname, patientsurname, patienttcno],(err,results)=>{
        if(err) throw err;
        const patient_no=results.insertId;

        const sqlApp="insert into appointment (appointmentdate, patientno, doctorno, hoursno) values(?,?,?,?)";
        db.query(sqlApp, [appointmentdate, patient_no, doctor_no, hours_no], (err,results)=>{
            if(err) throw err;
            res.redirect("/list_appointment");
        });
    });
});

router.get("/get_doctors_by_department", (req, res) => {
    const department_no = req.query.department_no;
    const sql = "SELECT * FROM doctor WHERE departmentno = ?";
    db.query(sql, [department_no], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

router.get("/booked_times",(req,res)=>{
    const doctor_no=req.query.doctor_no;
    const appointmentdate=req.query.selectedDate;
    const sql=`select * from times where hours_no not in 
    (select hoursno from appointment where doctorno=? and appointmentdate=?)`;
    db.query(sql,[doctor_no,appointmentdate],(err,results)=>{
        if(err) throw err;
        res.json(results);
    });
});

module.exports=router;