import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Form validation
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Retrieve registered user data from local storage
    const registeredUsers =
      JSON.parse(localStorage.getItem("registrationData")) || [];

    // Check if there is a registered user with the provided email and password
    const matchedUser = registeredUsers.find(
      (user) => user.email === email && user.psw === password
    );

    if (matchedUser) {
      // Login successful, redirect to dashboard or perform any other action
      alert("Login successful!");
      window.location = "/";
      // Redirect to dashboard or any other page
      // window.location.href = '/dashboard';
    } else {
      // Login failed, show error message
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="LoginForm">
      <h1>Login </h1>
      {error && <p className="error">{error}</p>}
      <div className="b1">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            <Link to="/check-nic">Login</Link>
          </button>
          <Link to="/forgot">Forgot password</Link>
          <br />
          <Link to="/Registration">Don't Have Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
