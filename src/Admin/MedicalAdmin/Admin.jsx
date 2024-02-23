import React, { useState, useEffect } from "react";

function AdminPanelMedical() {
  const [formData, setFormData] = useState({});
  const [editedData, setEditedData] = useState({});
  const [editingCnic, setEditingCnic] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Data")) || {};
    setFormData(data);
  }, []);

  const handleEdit = (cnic) => {
    setEditingCnic(cnic);
    setEditedData({ ...formData[cnic]?.medical });
  };

  const handleEditChange = (field, value) => {
    setEditedData({ ...editedData, [field]: value });
  };

  const handleSaveEdit = () => {
    const updatedData = { ...formData };
    updatedData[editingCnic].medical = editedData;
    setFormData(updatedData);
    localStorage.setItem("Data", JSON.stringify(updatedData));
    setEditingCnic("");
  };

  const handleDelete = (cnic) => {
    // Handle delete logic
  };

  return (
    <div className="admin-panel">
      <h2>Medical Records</h2>
      <ul>
        {Object.keys(formData).map((cnic) => (
          <li key={cnic}>
            <span>CNIC: {cnic}</span>
            <br />
            {editingCnic === cnic ? (
              <>
                <label>
                  Medical Conditions:
                  <input
                    type="text"
                    value={editedData.medicalConditions}
                    onChange={(e) =>
                      handleEditChange("medicalConditions", e.target.value)
                    }
                  />
                </label>
                <br />
                <label>
                  Medications Prescribed:
                  <input
                    type="text"
                    value={editedData.medicationsPrescribed}
                    onChange={(e) =>
                      handleEditChange("medicationsPrescribed", e.target.value)
                    }
                  />
                </label>
                <br />
                <label>
                  Allergies:
                  <input
                    type="text"
                    value={editedData.allergies}
                    onChange={(e) =>
                      handleEditChange("allergies", e.target.value)
                    }
                  />
                </label>
                <br />
                <label>
                  Surgery Details:
                  <input
                    type="text"
                    value={editedData.surgeryDetails}
                    onChange={(e) =>
                      handleEditChange("surgeryDetails", e.target.value)
                    }
                  />
                </label>
                <br />
                <label>
                  Vaccination History:
                  <input
                    type="text"
                    value={editedData.vaccinationHistory}
                    onChange={(e) =>
                      handleEditChange("vaccinationHistory", e.target.value)
                    }
                  />
                </label>
                <br />
                <label>
                  Family Medical History:
                  <input
                    type="text"
                    value={editedData.familyMedicalHistory}
                    onChange={(e) =>
                      handleEditChange("familyMedicalHistory", e.target.value)
                    }
                  />
                </label>
                <br />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {formData[cnic]?.medical && (
                  <>
                    <span>
                      Medical Conditions:{" "}
                      {formData[cnic].medical.medicalConditions}
                    </span>
                    <br />
                    <span>
                      Medications Prescribed:{" "}
                      {formData[cnic].medical.medicationsPrescribed}
                    </span>
                    <br />
                    <span>Allergies: {formData[cnic].medical.allergies}</span>
                    <br />
                    <span>
                      Surgery Details: {formData[cnic].medical.surgeryDetails}
                    </span>
                    <br />
                    <span>
                      Vaccination History:{" "}
                      {formData[cnic].medical.vaccinationHistory}
                    </span>
                    <br />
                    <span>
                      Family Medical History:{" "}
                      {formData[cnic].medical.familyMedicalHistory}
                    </span>
                    <br />
                  </>
                )}
                <button onClick={() => handleEdit(cnic)}>Edit</button>
                <button onClick={() => handleDelete(cnic)}>Delete</button>
              </>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanelMedical;
