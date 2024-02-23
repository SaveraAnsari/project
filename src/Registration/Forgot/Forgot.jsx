import React, { useState } from "react";

function Forgot() {
  const [email, setEmail] = useState("");
  const [nicNo, setNicNo] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRetrievePassword = () => {
    // Retrieve registration data from local storage
    const registrationData = JSON.parse(
      localStorage.getItem("registrationData")
    );

    // Check if registrationData is an array
    if (!Array.isArray(registrationData)) {
      setPassword("Registration data not found or invalid");
      return;
    }

    // Find the matching object in the registrationData array
    const matchingUser = registrationData.find(
      (user) =>
        user.email === email && user.nicNo === nicNo && user.phone === phone
    );

    // Check if a matching user was found
    if (matchingUser) {
      // If there's a match, set the password
      setPassword(matchingUser.psw);
      alert(matchingUser.psw);
    } else {
      setPassword("Password not found");
      alert("password not found"); // Or handle the case when data doesn't match
    }
  };

  return (
    <>
      <div className="LoginForm">
        <div className="b2" style={{ width: "auto" }}>
          <form>
            <h1>Forgot Password</h1>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="NIC No."
              value={nicNo}
              onChange={(e) => setNicNo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contact No."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleRetrievePassword}>Retrieve Password</button>
            {/* <p>{password}</p> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Forgot;
