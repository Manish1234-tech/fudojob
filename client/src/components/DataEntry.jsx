import React, { useState } from "react";
import "./DataEntry.css";

const companies = [
  {
    name: "TechNova Solutions",
    role: "Data Entry Operator",
    location: "Delhi",
    type: "Full Time",
    salary: "₹15,000 - ₹25,000",
    experience: "0-1 years",
    description:
      "We are looking for a data entry operator to update and maintain information in our company databases and computer systems.",
    responsibilities: [
      "Enter customer and account data",
      "Maintain accurate records",
      "Verify data and correct errors",
      "Generate reports"
    ],
    skills: ["Typing Speed", "MS Excel", "Attention to detail"]
  },
  {
    name: "DataCore Pvt Ltd",
    role: "Back Office Executive",
    location: "Mumbai",
    type: "Full Time",
    salary: "₹12,000 - ₹20,000",
    experience: "Fresher",
    description:
      "Join our back office team to handle data processing and documentation tasks.",
    responsibilities: [
      "Manage company records",
      "Data processing",
      "File organization"
    ],
    skills: ["Computer Basics", "MS Office"]
  },
  {
    name: "InfoEdge Services",
    role: "Remote Data Entry",
    location: "Work From Home",
    type: "Remote",
    salary: "₹18,000 - ₹30,000",
    experience: "1+ years",
    description:
      "Work remotely and manage data entry tasks with flexible working hours.",
    responsibilities: [
      "Input data from source documents",
      "Review data for errors"
    ],
    skills: ["Typing", "Accuracy"]
  },
  {
    name: "QuickEntry Hub",
    role: "Data Operator",
    location: "Pune",
    type: "Full Time",
    salary: "₹10,000 - ₹18,000",
    experience: "Fresher",
    description: "Looking for fast typists to manage bulk data entry.",
    responsibilities: ["Data input", "Record keeping"],
    skills: ["Typing Speed"]
  },
  {
    name: "Alpha DataWorks",
    role: "Data Analyst Assistant",
    location: "Bangalore",
    type: "Full Time",
    salary: "₹20,000 - ₹35,000",
    experience: "1-2 years",
    description:
      "Assist in maintaining databases and preparing reports.",
    responsibilities: [
      "Maintain data systems",
      "Prepare reports"
    ],
    skills: ["Excel", "Data Handling"]
  }
];

const DataEntry = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null
  });
  const [applied, setApplied] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleApply = (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Please upload your resume");
      return;
    }

    // Store locally (fake system)
    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    applications.push({
      ...formData,
      company: selectedCompany.name
    });

    localStorage.setItem("applications", JSON.stringify(applications));

    setApplied(true);
  };

  return (
    <div className="dataentry-page">

      {/* LEFT SIDEBAR */}
      <div className="sidebar">
        <h3>Companies</h3>

        {companies.map((company, index) => (
          <div
            key={index}
            className="company-card"
            onClick={() => {
              setSelectedCompany(company);
              setApplied(false);
            }}
          >
            <h4>{company.name}</h4>
            <p>{company.role}</p>
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="main-content">
        {selectedCompany ? (
          <>
            <h2>{selectedCompany.name}</h2>
            <p><strong>Role:</strong> {selectedCompany.role}</p>
            <p><strong>Location:</strong> {selectedCompany.location}</p>
            <p><strong>Salary:</strong> {selectedCompany.salary}</p>
            <p><strong>Experience:</strong> {selectedCompany.experience}</p>

            <p>{selectedCompany.description}</p>

            <h4>Responsibilities:</h4>
            <ul>
              {selectedCompany.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h4>Skills Required:</h4>
            <ul>
              {selectedCompany.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

            {/* APPLY FORM */}
            {!applied ? (
              <>
                <h3>Apply Now</h3>

                <form onSubmit={handleApply} className="apply-form">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    required
                  />

                  <button type="submit">Apply Job</button>
                </form>
              </>
            ) : (
              <div className="success-msg">
                ✅ Application submitted successfully!
              </div>
            )}
          </>
        ) : (
          <h2>Select a company to view job details</h2>
        )}
      </div>

    </div>
  );
};

export default DataEntry;