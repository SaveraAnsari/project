// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Registration = () => {
// const [formData, setFormData] = useState({
//     nicNumber: "",
//     name: "",
//     nicStatus: ""
// });

// const handleInputChange = (event) => {
//     setFormData({
//         ...formData,
//         [event.target.name]: event.target.value
//     });
// };

// const handleSelectChange = (event) => {
//     setFormData({
//         ...formData,
//         nicStatus: event.target.value
//     });

//     if (event.target.value === "No") {
//         window.location.href = '/new-component';
//     }
// };

// const handleSaveData = () => {
//     // Retrieve existing data from local storage
//     const existingDataString = localStorage.getItem("registrationFormData");
//     let existingData = [];

//     // If there is existing data, parse it from JSON
//     if (existingDataString) {
//         existingData = JSON.parse(existingDataString);
//     }

//     // Add the new form data to the existing data array
//     existingData.push(formData);

//     // Save the updated data back to local storage
//     localStorage.setItem("registrationFormData", JSON.stringify(existingData));

//     // Log all data to console
//     console.log(existingData);
// };

// return (
//     <>
{
  /* <input type="text" placeholder="NIC Number" name="nicNumber" value={formData.nicNumber} onChange={handleInputChange} />
            <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} />
            <select id="nicStatus" name="nicStatus" value={formData.nicStatus} onChange={handleSelectChange}>
                <option value="Nic">Have Nic</option>
                <option value="No">Have No Nic</option>
            </select>
            <button onClick={handleSaveData}>Save Data</button> */
}
{
  /* <button> <Link to="/NicReg">Have Nic</Link></button>
            <button><a>Not Nic</a></button> */
}
{
  /* </>
    );
};

export default Registration; */
}
// NicComponent.js

import React from "react";
import { Link } from "react-router-dom";

function NicComponent() {
  return (
    <div>
      <button>
        <Link to="/nic"> Have not nic</Link>
      </button>
      <button>
        <Link to="/new-registration">Have nic</Link>
      </button>
    </div>
  );
}

export default NicComponent;
