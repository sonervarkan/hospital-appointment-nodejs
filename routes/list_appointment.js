const express=require("express");
const router=express.Router();
const db=require("../utilities/database");

router.get("/list_appointment",(req,res)=>{

    const sqlAppointment=`select * from appointment a 
    join doctor d on d.doctor_no=a.doctorno 
    join department de on de.department_no=d.departmentno 
    join patient p on p.patient_no=a.patientno 
    join times t on t.hours_no=a.hoursno;`;
    db.query(sqlAppointment,(err,results)=>{
        if(err) throw err;
        res.render("list_appointment",{appointments:results});
    });
    
                });
    
module.exports=router;