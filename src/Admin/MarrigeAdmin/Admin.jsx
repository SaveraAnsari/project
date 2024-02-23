import React, { useState, useEffect } from "react";

const AdminPanelMarrige = () => {
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [editedFormData, setEditedFormData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Data")) || {};
    setFormData(data);
  }, []);

  const handleEdit = (id) => {
    setEditingId(id);
    setEditedFormData({ ...formData[id]?.education });
  };

  const handleDelete = (id) => {
    const updatedData = { ...formData };
    delete updatedData[id];
    localStorage.setItem("Data", JSON.stringify(updatedData));
    setFormData(updatedData);
  };

  const handleSaveEdit = () => {
    const updatedData = { ...formData };
    updatedData[editingId].education = editedFormData;
    localStorage.setItem("Data", JSON.stringify(updatedData));
    setFormData(updatedData);
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <table>
        <thead>
          <tr>
            <th>Husband Name</th>
            <th>Husband CNIC</th>
            <th>Bride Name</th>
            <th>Bride CNIC</th>
            <th>Marriage Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(formData).map((id) => (
            <tr key={id}>
              <td>
                {editingId === id ? (
                  <input
                    type="text"
                    name="husbandName"
                    value={editedFormData.husbandName || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  formData[id]?.education?.husbandName
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type="text"
                    name="Cnic"
                    value={editedFormData.Cnic || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  id
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type="text"
                    name="brideName"
                    value={editedFormData.brideName || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  formData[id]?.education?.brideName
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type="text"
                    name="brideCnic"
                    value={editedFormData.brideCnic || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  formData[id]?.education?.brideCnic
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type="date"
                    name="marriageDate"
                    value={editedFormData.marriageDate || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  formData[id]?.education?.marriageDate
                )}
              </td>
              <td>
                {editingId === id ? (
                  <>
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(id)}>Edit</button>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanelMarrige;
