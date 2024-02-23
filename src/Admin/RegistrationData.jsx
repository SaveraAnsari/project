import React, { useState, useEffect } from "react";
import './regData.css'

function RegistrationData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Retrieve registration data from local storage
    const dataFromLocalStorage =
      JSON.parse(localStorage.getItem("registrationData")) || [];
    setUserData(dataFromLocalStorage);
  }, []);

  return (
    <div>
      <h1>Registration Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>NIC Number</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.nicNo}</td>
              <td>{user.psw}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegistrationData;
