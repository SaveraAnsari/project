import React, { useState } from "react";

function EmploymentForm() {
  const [cnic, setCnic] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [isJobPresent, setIsJobPresent] = useState(true);
  const [salary, setSalary] = useState("");
  const [jobResponsibility, setJobResponsibility] = useState("");
  const [skills, setSkills] = useState("");

  const handleJobPresentChange = (e) => {
    setIsJobPresent(e.target.value === "yes");
    if (e.target.value === "no") {
      setJobEndDate("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      jobTitle,
      companyName,
      jobStartDate,
      jobEndDate,
      isJobPresent,
      salary,
      jobResponsibility,
      skills,
    };

    let existingData = JSON.parse(localStorage.getItem("Data")) || {};

    // Step 4: Use CNIC value when storing form data in localStorage
    if (!existingData[cnic]) {
      existingData[cnic] = { EmploymentData: {} };
    }

    existingData[cnic].EmploymentData = formData; // Save form data under 'EmploymentData' key

    localStorage.setItem("Data", JSON.stringify(existingData));

    // Reset form fields
    setCnic("");
    setJobTitle("");
    setCompanyName("");
    setJobStartDate("");
    setJobEndDate("");
    setIsJobPresent(true);
    setSalary("");
    setJobResponsibility("");
    setSkills("");
  };

  const handleAddAnother = () => {
    // Logic to add another response
    console.log("Adding another response");
  };

  return (
    <div className="NicReg">
      <div>
        <form onSubmit={handleSubmit} className="marriage-form">
          <h1>Employment Form</h1>
          <label>
            CNIC:
            <input
              type="text"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Job Title:
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Company Name:
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Job Start Date:
            <input
              type="date"
              value={jobStartDate}
              onChange={(e) => setJobStartDate(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Are you currently employed:
            <input
              type="radio"
              name="jobPresent"
              value="yes"
              checked={isJobPresent}
              onChange={handleJobPresentChange}
              style={{
                border: "none",
                margin: 0,
                padding: 0,
                boxShadow: "none",
                width: "30px",
              }}
            />
            Yes
            <input
              type="radio"
              name="jobPresent"
              value="no"
              checked={!isJobPresent}
              onChange={handleJobPresentChange}
              style={{
                border: "none",
                margin: 0,
                padding: 0,
                boxShadow: "none",
                width: "30px",
              }}
            />
            No
          </label>
          <br />
          {!isJobPresent && (
            <>
              <label>
                Job End Date:
                <input
                  type="date"
                  value={jobEndDate}
                  onChange={(e) => setJobEndDate(e.target.value)}
                />
              </label>
              <br />
            </>
          )}
          <label>
            Salary:
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </label>
          <br />
          <label>
            Job Responsibility:
            <textarea
              value={jobResponsibility}
              onChange={(e) => setJobResponsibility(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Skills:
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleAddAnother}>
            Add Another Response
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmploymentForm;
