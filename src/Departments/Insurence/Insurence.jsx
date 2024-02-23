import React, { useState } from "react";

function InsuranceForm() {
  const [cnic, setCnic] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [insuranceStartDate, setInsuranceStartDate] = useState("");
  const [insuranceEndDate, setInsuranceEndDate] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState("");
  const [premiumAmount, setPremiumAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      insuranceType,
      insuranceStartDate,
      insuranceEndDate,
      insuranceCompany,
      insurancePolicyNumber,
      premiumAmount,
    };

    let existingData = JSON.parse(localStorage.getItem("Data")) || {};

    // Check if CNIC number already exists in localStorage
    if (!existingData[cnic]) {
      existingData[cnic] = { InsuranceData: {} };
    }

    existingData[cnic].InsuranceData = formData;

    localStorage.setItem("Data", JSON.stringify(existingData));

    // Reset form fields
    setCnic("");
    setInsuranceType("");
    setInsuranceStartDate("");
    setInsuranceEndDate("");
    setInsuranceCompany("");
    setInsurancePolicyNumber("");
    setPremiumAmount("");
  };

  const handleAddAnother = () => {
    // Logic to add another response
    console.log("Adding another response");
  };

  return (
    <div className="NicReg">
      <div>
        <form onSubmit={handleSubmit} className="marriage-form">
          <h1>Insurance Form</h1>
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
            Insurance Type:
            <input
              type="text"
              value={insuranceType}
              onChange={(e) => setInsuranceType(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Insurance Start Date:
            <input
              type="date"
              value={insuranceStartDate}
              onChange={(e) => setInsuranceStartDate(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Insurance End Date:
            <input
              type="date"
              value={insuranceEndDate}
              onChange={(e) => setInsuranceEndDate(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Insurance Company:
            <input
              type="text"
              value={insuranceCompany}
              onChange={(e) => setInsuranceCompany(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Insurance Policy Number:
            <input
              type="text"
              value={insurancePolicyNumber}
              onChange={(e) => setInsurancePolicyNumber(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Premium Amount:
            <input
              type="number"
              value={premiumAmount}
              onChange={(e) => setPremiumAmount(e.target.value)}
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

export default InsuranceForm;
