import React, { useState } from "react";
import { getAppliedJobs } from "./Utils";
import "./AppliedJobs.css";
import { Link } from "react-router-dom";

const locationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);
const salaryIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );


const AppliedJobs = () => {
  const allJobs = getAppliedJobs();
  const [filter, setFilter] = useState("all");

  const filterJobs = () => {
    switch (filter) {
      case "onsite":
        return allJobs.filter((job) => job.jobType === "Onsite");
      case "remote":
        return allJobs.filter((job) => job.jobType === "Remote");
      default:
        return allJobs;
    }
  };

  const filteredJobs = filterJobs();
  console.log("allJobs", allJobs);
console.log("filter", filter);
console.log("filteredJobs", filteredJobs)

  return (
    <div className="my-container">
      <div className="flex justify-end mb-4">
        <select
          className="p-2 border border-gray-300 rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Filter By</option>
          <option value="onsite">Onsite</option>
          <option value="remote">Remote</option>
        </select>
      </div>
      <h2 className="text-3xl text-center font-bold mb-6">Applied Jobs</h2>
      {filteredJobs.length === 0 ? (
        <p>No jobs applied yet.</p>
      ) : (
        filteredJobs.map((job) => (
          <div
            key={job.id}
            className="applied-jobs-card shadow-xl flex flex-col md:flex-row gap-8 items-center p-4 mb-4"
          >
            <img className="applied-jobs-img" src={job.logo} alt="" />
            <div className="flex-1">
              <h3 className="text-xl mb-4 font-bold">{job.position}</h3>
              <p className="mb-4">{job.name}</p>
              <button className="text-[#7E90FE] bg-white hover:bg-cyan-400 mb-4 hover:text-white border-[#7E90FE] px-4 py-2 rounded-md border-2">
                {job.jobType}
              </button>
              <div className="flex gap-6">
                <div className="flex items-center mr-4">
                  {salaryIcon}
                  <span className="text-gray-600">{job.salary}</span>
                </div>
                <div className="flex items-center">
                  {locationIcon}
                  <span className="text-gray-600">{job.address}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex-grow md:flex-none flex items-end justify-end">
              <Link
                to={`/job-details/${job.id}`}
                className="btn-primary w-full md:w-auto"
              >
                View Details
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AppliedJobs;
