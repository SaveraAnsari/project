import React, { useState, useEffect } from "react";
import "../../Admin/regData.css";
import "./education.css";

function Education() {
  const [cnic, setCnic] = useState(""); // Step 1: State variable for CNIC
  const [educationData, setEducationData] = useState([]);
  const [degreeName, setDegreeName] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [status, setStatus] = useState("");
  const [cgpaPercentage, setCgpaPercentage] = useState("");

  useEffect(() => {
    const dataFromLocalStorage =
      JSON.parse(localStorage.getItem("education")) || [];
    setEducationData(dataFromLocalStorage);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      degreeName,
      instituteName,
      duration,
      startDate,
      status,
      cgpaPercentage,
    };

    let existingData = JSON.parse(localStorage.getItem("Data")) || {};

    // Step 4: Use CNIC value when storing form data in localStorage
    if (!existingData[cnic]) {
      existingData[cnic] = { Education: {} };
    }

    existingData[cnic].Education = formData; // Save form data under 'Education' key

    localStorage.setItem("Data", JSON.stringify(existingData));

    // Reset form fields
    setDegreeName("");
    setInstituteName("");
    setDuration("");
    setStartDate("");
    setStatus("");
    setCgpaPercentage("");
  };

  return (
    <>
      <div className="NicReg">
        <div className="b2">
          <form>
            <h1>Education Details</h1>
            {/* Step 2: Add CNIC input field */}
            <input
              type="text"
              placeholder="CNIC"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
            />
            <input
              type="text"
              placeholder="Degree Name"
              value={degreeName}
              onChange={(e) => setDegreeName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Institute Name"
              value={instituteName}
              onChange={(e) => setInstituteName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <label htmlFor="start">Start Date</label>
            <input
              type="date"
              id="start"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <br />
            <input
              style={{
                border: "none",
                margin: 0,
                padding: 0,
                boxShadow: "none",
                width: "30px",
              }}
              type="radio"
              id="complete"
              name="status"
              value="Complete"
              checked={status === "Complete"}
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="complete" style={{ marginTop: "10px" }}>
              Complete
            </label>
            <input
              style={{
                border: "none",
                margin: 0,
                padding: 0,
                boxShadow: "none",
                width: "30px",
              }}
              type="radio"
              id="inProcess"
              name="status"
              value="In Process"
              checked={status === "In Process"}
              onChange={(e) => setStatus(e.target.value)}
            />

            <label htmlFor="inProcess">In Process</label>
            <input
              type="text"
              placeholder="CGPA/Percentage"
              value={cgpaPercentage}
              onChange={(e) => setCgpaPercentage(e.target.value)}
            />
            <button onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
      <h2>Education Details</h2>
      <table>
        <thead>
          <tr>
            <th>Degree Name</th>
            <th>Institute Name</th>
            <th>Duration</th>
            <th>Start Date</th>
            <th>Status</th>
            <th>CGPA/Percentage</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((education, index) => (
            <tr key={index}>
              <td>{education.degreeName}</td>
              <td>{education.instituteName}</td>
              <td>{education.duration}</td>
              <td>{education.startDate}</td>
              <td>{education.status}</td>
              <td>{education.cgpaPercentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Education;
