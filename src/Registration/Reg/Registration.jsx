import React, { useState } from "react";
import "./registration.css";

function NewRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nicNo: "",
    psw: "",
    cpsw: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      if (formData.psw === formData.cpsw) {
        const userData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          nicNo: formData.nicNo,
          psw: formData.psw,
        };
        // Retrieve existing data from local storage or initialize as an empty array
        const existingData =
          JSON.parse(localStorage.getItem("registrationData")) || [];
        // Add the new user data to the existing data
        const updatedData = [...existingData, userData];
        // Save the updated data back to local storage
        localStorage.setItem("registrationData", JSON.stringify(updatedData));
        // Clear the form fields after submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          nicNo: "",
          psw: "",
          cpsw: "",
        });
        alert("Registration successful!");
      } else {
        alert("Password and confirmed password do not match!");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      alert((errors.name = "Name is required"));
    }
    if (!data.email.trim()) {
      alert((errors.email = "Email is required"));
    } else if (!isValidEmail(data.email)) {
      alert((errors.email = "Invalid email format"));
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!isValidPhone(data.phone)) {
      alert((errors.phone = "Invalid phone number format (11 digits)"));
    }
    if (!data.nicNo.trim()) {
      alert((errors.nicNo = "NIC number is required"));
    } else if (!isValidNIC(data.nicNo)) {
      alert((errors.nicNo = "Invalid NIC number format (13 digits)"));
    }
    if (!data.psw.trim()) {
      alert((errors.psw = "Password is required"));
    }
    if (!data.cpsw.trim()) {
      alert((errors.cpsw = "Confirm Password is required"));
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Email regex pattern for basic validation
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  };

  const isValidPhone = (phone) => {
    // Phone regex pattern for basic validation
    const phonePattern = /^\d{11}$/;
    return phonePattern.test(phone);
  };

  const isValidNIC = (nic) => {
    // NIC regex pattern for basic validation
    const nicPattern = /^\d{5}-\d{7}-\d{1}$/;
    return nicPattern.test(nic);
  };

  return (
    <div className="registerForm">
      <h1 className="h1">Registration Form</h1>
      <div className="b">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div>
          <input
            type="text"
            name="nicNo"
            placeholder="NIC Number"
            value={formData.nicNo}
            onChange={handleChange}
          />
          {errors.nicNo && <span className="error">{errors.nicNo}</span>}
        </div>
        <div>
          <input
            type="password"
            name="psw"
            placeholder="Password"
            value={formData.psw}
            onChange={handleChange}
          />
          {errors.psw && <span className="error">{errors.psw}</span>}
        </div>
        <div>
          <input
            type="password"
            name="cpsw"
            placeholder="Confirm Password"
            value={formData.cpsw}
            onChange={handleChange}
          />
          {errors.cpsw && <span className="error">{errors.cpsw}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default NewRegistration;
