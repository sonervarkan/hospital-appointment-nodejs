# Hospital Appointment Management System

This project is a Node.js-based hospital appointment management system.  
It allows creating, listing, and managing departments, doctors, patients, times, and appointments.  
The application uses **Express.js**, **MySQL**, and **Pug** for server-side rendering.

---

## Features

- Add/List Departments  
- Add/List Doctors  
- Add/List Patients  
- Add/List Available Times  
- Add/List Appointments  
- Dynamic doctor filtering by department  
- Dynamic available time filtering based on doctor and date  
- Fully server-rendered with Pug templates  

---

## Technologies Used

- Node.js  
- Express.js  
- MySQL (mysql2)  
- Pug Template Engine  
- jQuery (AJAX)  
- HTML5 / CSS3  

---

## Project Structure
```
hospital-appointment-system/
├── app.js
├── package.json
├── utilities/
│ └── database.js
├── routes/
│ ├── add_appointment.js
│ ├── list_appointment.js
│ ├── add_department.js
│ ├── list_department.js
│ ├── add_doctor.js
│ ├── list_doctor.js
│ ├── add_patient.js
│ ├── list_patient.js
│ ├── add_time.js
│ └── list_time.js
├── views/
│ ├── home.pug
│ ├── add_appointment.pug
│ ├── list_appointment.pug
│ ├── add_department.pug
│ ├── list_department.pug
│ ├── add_doctor.pug
│ ├── list_doctor.pug
│ ├── add_patient.pug
│ ├── list_patient.pug
│ ├── add_time.pug
│ └── list_time.pug
└── public/
└── css/
└── navbar.css
```
---

## Installation

1. Clone the repository:


git clone https://github.com/YOUR_USERNAME/hospital-appointment-system.git
Install dependencies:

npm install
Configure your MySQL database in:

utilities/database.js
Start the server:

node app.js
Visit in your browser:
http://localhost:3000

## How the System Works
Departments
You can add new departments and list existing ones.

Doctors
Doctors belong to specific departments.
When adding an appointment, doctors are dynamically filtered by department.

Patients
Patients are stored automatically when creating an appointment.

Times
Available times (hours) are stored in the database.
Booked times are filtered out automatically.

Appointments
Integrated with doctor, patient, department, and time tables.

## API Endpoints (Routes)
### Appointment
GET  /add_appointment
POST /add_appointment
GET  /list_appointment
GET  /get_doctors_by_department
GET  /booked_times

### Departments
GET  /add_department
POST /add_department
GET  /list_department

### Doctors
GET  /add_doctor
POST /add_doctor
GET  /list_doctor

### Patients
GET  /add_patient
POST /add_patient
GET  /list_patient

### Times
GET  /add_time
POST /add_time
GET  /list_time

## Views (Pug Templates)
All interface screens (home page, lists, add forms) are rendered using Pug templates inside:
views/

The navbar is included manually in each page using:
link(rel="stylesheet", href="css/navbar.css")

## Contributing
Fork the repository

Create a new branch

Commit your updates

Push the branch

Submit a pull request

## License
This project currently has no license.
You may add one if you plan to publish or distribute it publicly.
