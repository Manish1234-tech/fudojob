import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.find(user => user.email === formData.email);

    if (userExists) {
      alert("User already exists!");
      return;
    }

    // Save new user
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Now login.");
    
    // Clear form
    setFormData({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        <div className="signup-left">
          <h2>Create Account 🚀</h2>
          <p>Join FudoJobs and explore thousands of opportunities.</p>
        </div>

        <div className="signup-right">
          <h3>Signup</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Signup</button>
          </form>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;