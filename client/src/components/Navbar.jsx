import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Load logged-in user
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedUser);
  }, []);

  // Auto close popup on route change
  useEffect(() => {
    setShowPopup(false);
  }, [location]);

  // Handle Jobs click
  const handleJobsClick = () => {
    if (!user) {
      setShowPopup(true);
    } else {
      navigate("/jobs");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">FudoJobs</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>

          {/* ✅ FIXED JOBS LINK */}
          <li>
            <span className="nav-item" onClick={handleJobsClick}>
              Jobs
            </span>
          </li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="auth-buttons">
          {user ? (
            <>
              <span className="username">Hi, {user.name}</span>
              <button onClick={handleLogout} className="logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login">Login</Link>
              <Link to="/signup" className="signup">Signup</Link>
            </>
          )}
        </div>
      </nav>

      {/* 🔥 LOGIN POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Login Required</h3>
            <p>You must login first to view jobs.</p>

            <div className="popup-buttons">
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate("/login", { state: { from: "/jobs" } });
                }}
              >
                Go to Login
              </button>

              <button onClick={() => setShowPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;