import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Education from "./Departments/Education/Education";
import Forgot from "./Registration/Forgot/Forgot";
import Registration from "./Registration/Registration";
import NewRegistration from "./Registration/Reg/Registration";
import RegistrationData from "./Admin/RegistrationData";
import Nic from "./Registration/NicReg/NicReg";
import NicApprove from "./Admin/NicApprove";
import CheckNic from "./Registration/CheckNic";
import Empolyemnet from "./Departments/Employment/EmploymentForm";
import Marriage from "./Departments/Marriage/MarriageForm";
import Medical from "./Departments/MedicalHistory/MedicalHistory";
import TravelForm from "./Departments/Travel/Travel";
import InsuranceForm from "./Departments/Insurence/Insurence";
import AdminPanelMarrige from "./Admin/MarrigeAdmin/Admin";
import AdminPanelMedical from "./Admin/MedicalAdmin/Admin";
import UserData from "./Admin/AllData/Data";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/education" element={<Education />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/new-registration" element={<NewRegistration />} />
        <Route path="/registration-data" element={<RegistrationData />} />
        <Route path="/nic" element={<Nic />} />
        <Route path="/nic-approve" element={<NicApprove />} />
        <Route path="/check-nic" element={<CheckNic />} />
        <Route path="/employment" element={<Empolyemnet />} />
        <Route path="/marriage" element={<Marriage />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/travel" element={<TravelForm />} />
        <Route path="/insurance" element={<InsuranceForm />} />
        <Route path="/admin-panel-marriage" element={<AdminPanelMarrige />} />
        <Route path="/admin-panel-medical" element={<AdminPanelMedical />} />
        <Route path="/user-data" element={<UserData />} />
        {/* Add more routes for other elements if needed */}
      </Routes>
    </Router>
  );
}

export default App;
