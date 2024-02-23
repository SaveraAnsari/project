import React, { useState } from "react";
import "./nicreg.css";

function NicReg() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    fatherNIC: "",
    motherName: "",
    motherNIC: "",
    dob: "",
    address: "",
    permanentAddress: "",
    generatedNIC: "",
    age: "",
    photo: null,
    birthCertificate: null,
    fathersNic: null,
    bForm: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "dob") {
      const dobDate = new Date(value);
      const today = new Date();
      const ageDiff = today.getFullYear() - dobDate.getFullYear();
      const isBirthdayPassed =
        today.getMonth() < dobDate.getMonth() ||
        (today.getMonth() === dobDate.getMonth() &&
          today.getDate() < dobDate.getDate());
      const age = isBirthdayPassed ? ageDiff - 1 : ageDiff;
      setFormData((prevState) => ({
        ...prevState,
        age: age,
      }));
    } else if (files) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const NIC = () => {
    const randomNIC =
      Math.floor(10000 + Math.random() * 90000) +
      "-" +
      Math.floor(1000000 + Math.random() * 9000000) +
      "-" +
      Math.floor(1 + Math.random() * 9); // Generates NIC in the pattern 5-6-1
    setFormData((prevState) => ({
      ...prevState,
      generatedNIC: randomNIC,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      generatedNIC,
      photo,
      birthCertificate,
      fathersNic,
      bForm,
      ...formDataWithoutFiles
    } = formData;

    // Combine form data into an object
    const formDataEntry = {
      ...formDataWithoutFiles,
      generatedNIC: generatedNIC,
      photo: photo ? photo.name : null,
      birthCertificate: birthCertificate ? birthCertificate.name : null,
      fathersNic: fathersNic ? fathersNic.name : null,
      bForm: bForm ? bForm.name : null,
    };

    // Retrieve existing data from local storage or initialize as an empty array
    const existingData = JSON.parse(localStorage.getItem("nicData")) || [];

    // Add the new entry to the existing data
    existingData.push(formDataEntry);

    // Save the updated data back to local storage
    localStorage.setItem("nicData", JSON.stringify(existingData));

    // Clear the form fields after submission
    setFormData({
      name: "",
      fatherName: "",
      fatherNIC: "",
      motherName: "",
      motherNIC: "",
      dob: "",
      address: "",
      permanentAddress: "",
      generatedNIC: "",
      age: "",
      photo: null,
      birthCertificate: null,
      fathersNic: null,
      bForm: null,
    });

    alert("Wait for admin approval. Check tomorrow.");
  };

  return (
    <>
      {" "}
      <div className="NicReg">
        <h1>NIC Registration</h1>
        <div className="b2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="fatherName"
              placeholder="Father Name"
              value={formData.fatherName}
              onChange={handleChange}
            />
            <input
              type="number"
              name="fatherNIC"
              placeholder="Father NIC No."
              value={formData.fatherNIC}
              onChange={handleChange}
            />
            <input
              type="text"
              name="motherName"
              placeholder="Mother Name"
              value={formData.motherName}
              onChange={handleChange}
            />
            <input
              type="number"
              name="motherNIC"
              placeholder="Mother NIC No."
              value={formData.motherNIC}
              onChange={handleChange}
            />
            <label htmlFor="dob">Date Of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="permanentAddress"
              placeholder="Permanent Address"
              value={formData.permanentAddress}
              onChange={handleChange}
            />

            <input
              type="text"
              name="generatedNIC"
              placeholder="Generated NIC"
              value={formData.generatedNIC}
              readOnly
            />
            <button type="button" onClick={NIC}>
              Generate NIC
            </button>
            <input
              type="number"
              placeholder="age"
              name="age"
              onChange={handleChange}
              value={formData.age}
              readOnly
            />
            <br />
            {/* Input fields for file selection */}
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleChange}
            />
            <label htmlFor="birthCertificate">Birth Certificate</label>
            <input
              type="file"
              id="birthCertificate"
              name="birthCertificate"
              onChange={handleChange}
            />
            <label htmlFor="fathersNic">Father's NIC</label>
            <input
              type="file"
              id="fathersNic"
              name="fathersNic"
              onChange={handleChange}
            />
            <label htmlFor="bForm">B Form</label>
            <input
              type="file"
              id="bForm"
              name="bForm"
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NicReg;
