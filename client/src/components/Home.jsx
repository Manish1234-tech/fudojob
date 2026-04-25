import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Find Your Dream Job Today</h1>
        <p>Discover thousands of opportunities from top companies</p>

        <div className="search-box">
          <input type="text" placeholder="Job title or keyword" />
          <input type="text" placeholder="Location" />
          <button>Search</button>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="jobs">
        <h2>Featured Jobs</h2>

        <div className="job-cards">

          <div className="job-card1">
            <h3>Frontend Developer</h3>
            <p>Google • Remote</p>
            <span>₹12L - ₹18L</span>
            <button>Apply</button>
          </div>

          <div className="job-card1">
            <h3>Backend Engineer</h3>
            <p>Amazon • Bangalore</p>
            <span>₹15L - ₹25L</span>
            <button>Apply</button>
          </div>

          <div className="job-card1">
            <h3>UI/UX Designer</h3>
            <p>Adobe • Remote</p>
            <span>₹10L - ₹16L</span>
            <button>Apply</button>
          </div>

        </div>
      </section>

      {/* TOP COMPANIES */}
      <section className="companies">
        <h2>Top Companies Hiring</h2>

        <div className="company-list">
          <span>Google</span>
          <span>Microsoft</span>
          <span>Amazon</span>
          <span>Infosys</span>
          <span>TCS</span>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About FudoJobs</h2>

        <p>
          FudoJobs is a modern job portal designed to connect talented individuals 
          with top companies across the globe. Our platform makes job searching simple, 
          fast, and effective by offering personalized job recommendations and a seamless 
          application experience.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>🚀 Our Mission</h3>
            <p>
              To empower job seekers by providing the best opportunities and helping 
              companies find the right talent quickly.
            </p>
          </div>

          <div className="about-card">
            <h3>🌍 Our Vision</h3>
            <p>
              To become a leading global job platform that transforms how people 
              discover careers and companies hire talent.
            </p>
          </div>

          <div className="about-card">
            <h3>💼 What We Offer</h3>
            <p>
              Thousands of jobs, top company listings, easy applications, and 
              a user-friendly interface tailored for modern job seekers.
            </p>
          </div>

        </div>

        {/* STATS SECTION */}
        <div className="stats">
          <div>
            <h3>10K+</h3>
            <p>Jobs Posted</p>
          </div>
          <div>
            <h3>5K+</h3>
            <p>Companies</p>
          </div>
          <div>
            <h3>20K+</h3>
            <p>Users</p>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;