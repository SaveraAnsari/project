import React, { useState } from "react";
import "./MedicalHistoryForm.css";
import "../Marriage/MarriageForm.css";

function MedicalHistoryForm() {
  const [Cnic, setCnic] = useState(""); // Step 1: State variable for CNIC
  const [medicalConditions, setMedicalConditions] = useState("");
  const [medicationsPrescribed, setMedicationsPrescribed] = useState("");
  const [hasAllergies, setHasAllergies] = useState(false);
  const [allergies, setAllergies] = useState("");
  const [hasSurgeriesProcedures, setHasSurgeriesProcedures] = useState(false);
  const [surgeryDetails, setSurgeryDetails] = useState("");
  const [hasVaccinationHistory, setHasVaccinationHistory] = useState(false);
  const [vaccinations, setVaccinations] = useState([]);
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState("");

  const handleVaccinationChange = (e) => {
    const selectedVaccinations = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setVaccinations(selectedVaccinations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      Cnic,
      medicalConditions,
      medicationsPrescribed,
      allergies,
      surgeryDetails,
      vaccinations,
      familyMedicalHistory,
    };
  
    let existingData =
      JSON.parse(localStorage.getItem("Data")) || {};
  
    // Check if CNIC already exists in localStorage
    if (!existingData[Cnic]) {
      existingData[Cnic] = { MedicalData: {} };
    }
  
    existingData[Cnic].MedicalData = formData; // Save form data under 'MedicalData' key
  
    localStorage.setItem("Data", JSON.stringify(existingData));
  
    // Reset form fields
    setCnic("");
    setMedicalConditions("");
    setMedicationsPrescribed("");
    setHasAllergies(false);
    setAllergies("");
    setHasSurgeriesProcedures(false);
    setSurgeryDetails("");
    setHasVaccinationHistory(false);
    setVaccinations([]);
    setFamilyMedicalHistory("");
  };
  
  const handleAddAnother = () => {
    // Logic to add another response
    console.log("Adding another response");
  };

  return (
    <div className="marriage-form-container">
      <form className="marriage-form" onSubmit={handleSubmit}>
        {/* Step 2: Add CNIC input field */}
        <label>
          CNIC:
          <input
            type="text"
            value={Cnic}
            onChange={(e) => setCnic(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Medical Conditions:
          <input
            type="text"
            value={medicalConditions}
            onChange={(e) => setMedicalConditions(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Medications Prescribed:
          <input
            type="text"
            value={medicationsPrescribed}
            onChange={(e) => setMedicationsPrescribed(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Allergies:
          <input
            type="checkbox"
            checked={hasAllergies}
            onChange={(e) => setHasAllergies(e.target.checked)}
          />
        </label>
        {hasAllergies && (
          <>
            <br />
            <label>
              Details of Allergies:
              <textarea
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
              ></textarea>
            </label>
          </>
        )}
        <br />
        <label>
          Surgeries/Procedures:
          <input
            type="checkbox"
            checked={hasSurgeriesProcedures}
            onChange={(e) => setHasSurgeriesProcedures(e.target.checked)}
          />
        </label>
        {hasSurgeriesProcedures && (
          <>
            <br />
            <label>
              Details of Surgeries/Procedures:
              <textarea
                value={surgeryDetails}
                onChange={(e) => setSurgeryDetails(e.target.value)}
              ></textarea>
            </label>
          </>
        )}
        <br />
        <label>
          Vaccination History:
          <input
            type="checkbox"
            checked={hasVaccinationHistory}
            onChange={(e) => setHasVaccinationHistory(e.target.checked)}
          />
        </label>
        {hasVaccinationHistory && (
          <>
            <br />
            <label>
              Select Vaccinations:
              <select
                multiple
                value={vaccinations}
                onChange={handleVaccinationChange}
              >
                <option value="COVID-19">COVID-19</option>
                <option value="Flu">Flu</option>
                <option value="Hepatitis">Hepatitis</option>
                <option value="MMR">MMR</option>
                <option value="Varicella">Varicella</option>
                {/* Add more vaccination options as needed */}
              </select>
            </label>
          </>
        )}
        <br />
        <label>
          Family Medical History:
          <textarea
            value={familyMedicalHistory}
            onChange={(e) => setFamilyMedicalHistory(e.target.value)}
            required
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleAddAnother}>
          Add Another Response
        </button>
      </form>
    </div>
  );
}

export default MedicalHistoryForm;
