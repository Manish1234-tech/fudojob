import React from "react";
import "./Jobs.css";

const jobs = [
  { name: "Data Entry & Back Office", path: "/dataentry", tag: "New" },
  { name: "Sales & Marketing", path: "/sales-marketing" },
  { name: "BPO & Telecaller", path: "/bpo-telecaller" },
  { name: "Driver", path: "/driver" },
  { name: "Office Assistant", path: "/office-assistant" },
  { name: "Delivery & Collection", path: "/delivery-collection" },
  { name: "Teacher", path: "/teacher" },
  { name: "Cook", path: "/cook" },
  { name: "Receptionist & Front Office", path: "/receptionist" },
  { name: "Operator & Technician", path: "/operator-technician" },
  { name: "IT Engineer & Developer", path: "/it-engineer" },
  { name: "Hotel & Travel Executive", path: "/hotel-travel" },
  { name: "Accountant", path: "/accountant" },
  { name: "Designer", path: "/designer" },
  { name: "Warehouse Staff", path: "/warehouse", tag: "New" },
  { name: "Other Jobs", path: "/other-jobs" }
];

const Jobs = () => {
  return (
    <div className="jobs-page">
      <h2 className="jobs-title">Browse Job Categories</h2>

      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <a
            href={job.path}
            className="job-card"
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="job-top">
              <h3>{job.name}</h3>
              {job.tag && <span className="tag">{job.tag}</span>}
            </div>

            <p className="job-desc">
              Explore opportunities in {job.name.toLowerCase()}
            </p>

            <div className="job-bottom">
              <span className="jobs-count">
                {Math.floor(Math.random() * 500) + 50}+ jobs
              </span>
              <span className="arrow">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Jobs;