import React, { useState } from "react";
import "./Login.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  // 👉 where to redirect after login
  const redirectPath = location.state?.from || "/";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (validUser) {
      // ✅ SAVE LOGIN SESSION
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));

      alert("Login successful!");

      // ✅ REDIRECT TO JOBS (or wherever user came from)
      navigate(redirectPath);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-left">
          <h2>Welcome Back 👋</h2>
          <p>Login to explore jobs and opportunities.</p>
        </div>

        <div className="login-right">
          <h3>Login</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Login</button>
          </form>

          <p className="signup-text">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;