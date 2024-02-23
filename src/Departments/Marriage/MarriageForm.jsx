import React, { useState } from "react";
import "./MarriageForm.css"; // Import CSS file for styling

function MarriageForm() {
  const [husbandName, setHusbandName] = useState("");
  const [Cnic, setCnic] = useState("");
  const [brideName, setBrideName] = useState("");
  const [brideCnic, setBrideCnic] = useState("");
  const [marriageDate, setMarriageDate] = useState("");
  const [marriageCertificateImage, setMarriageCertificateImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      husbandName,
      Cnic,
      brideName,
      brideCnic,
      marriageDate,
      marriageCertificateImage: marriageCertificateImage.name, // Save only the filename for now
    };
  
    let existingData =
      JSON.parse(localStorage.getItem("Data")) || {};
  
    // Check if CNIC number already exists in localStorage
    if (!existingData[Cnic]) {
      existingData[Cnic] = { MarriageData: {} }; // Corrected key name to "MarriageData"
    }
  
    existingData[Cnic].MarriageData = formData; // Save form data under 'MarriageData' key
  
    localStorage.setItem("Data", JSON.stringify(existingData));
  
    // Reset form fields
    setHusbandName("");
    setCnic("");
    setBrideName("");
    setBrideCnic("");
    setMarriageDate("");
    setMarriageCertificateImage("");
  };
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMarriageCertificateImage(file);
  };

  return (
    <div className="marriage-form-container">
      <form onSubmit={handleSubmit} className="marriage-form">
        <div className="form-section">
          <h2>Groom Details</h2>
          <input
            type="text"
            placeholder="Husband Name"
            value={husbandName}
            onChange={(e) => setHusbandName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Husband CNIC"
            value={Cnic}
            onChange={(e) => setCnic(e.target.value)}
          />
          <br />
        </div>
        <div className="form-section">
          <h2>Bride Details</h2>
          <input
            type="text"
            placeholder="Bride Name"
            value={brideName}
            onChange={(e) => setBrideName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Bride CNIC"
            value={brideCnic}
            onChange={(e) => setBrideCnic(e.target.value)}
          />
          <br />
        </div>
        <div className="form-section">
          <h2>Marriage Details</h2>
          <label
            htmlFor="marriageDate"
            className="center"
            style={{ textAlign: "center" }}
          >
            Marriage Date:
          </label>
          <br />
          <input
            id="marriageDate"
            type="date"
            value={marriageDate}
            onChange={(e) => setMarriageDate(e.target.value)}
          />
          <br />
          <div className="file-input-container center">
            <label htmlFor="marriageCertificate" className="file-input-label">
              Select Marriage Certificate
            </label>
            <input
              id="marriageCertificate"
              type="file"
              onChange={handleFileChange}
              className="file-input"
            />
          </div>
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MarriageForm;
