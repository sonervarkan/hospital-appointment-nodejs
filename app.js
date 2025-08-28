const express=require("express");
const app=express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.render("home");
})


const listDepartmentRouter=require("./routes/list_department");
app.use(listDepartmentRouter);
const addDepartmentRouter=require("./routes/add_department");
app.use(addDepartmentRouter);
const listDoctorRouter=require("./routes/list_doctor");
app.use(listDoctorRouter);
const addDoctorRouter=require("./routes/add_doctor");
app.use(addDoctorRouter);
const listPatientRouter=require("./routes/list_patient.js");
app.use(listPatientRouter);
const addPatientRouter=require("./routes/add_patient.js");
app.use(addPatientRouter);
const listTimeRouter=require("./routes/list_time.js");
app.use(listTimeRouter);
const addTimeRouter=require("./routes/add_time.js");
app.use(addTimeRouter);
const listAppointmentRouter=require("./routes/list_appointment.js");
app.use(listAppointmentRouter);
const addAppointmentRouter=require("./routes/add_appointment.js");
app.use(addAppointmentRouter);

app.listen(3000, function () {
        console.log("Server started on port 3000");
    });
