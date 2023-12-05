import React, { useEffect, useState } from "react";
import { fetchJobsData } from "./Utils";
import { Link } from "react-router-dom";
import "./AppliedJobs.css";

const FeaturesJob = () => {
  const [jobsData, setJobsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleJobs, setVisibleJobs] = useState(4); // Number of initially visible jobs

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobsData();
        setJobsData(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching jobs data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const handleShowMore = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 4);
  };

  return (
    <div className="my-container">
      <h2 className="text-3xl text-center font-bold mb-6">Features Job</h2>
      <p className="text-center text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. It's your future.
      </p>
      {loading ? (
        <p>Loading jobs data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 border-gray-500 mt-8">
          {jobsData.slice(0, visibleJobs).map((job) => (
            <div
              key={job.id}
              className="bg-gray-50 rounded-md overflow-hidden shadow-md"
            >
              <img className="w-16 h-16 feature-image" src={job.logo} alt="" />
              <div className="p-4">
                <p className="text-xl font-bold mb-2">{job.name}</p>
                <p className="text-gray-700 mb-2">{job.position}</p>
                <button className="text-[#7E90FE] bg-white hover:bg-cyan-400 hover:text-white border-[#7E90FE] px-4 py-2 rounded-md border-2 mb-2">
                  {job.jobType}
                </button>
                <div className="flex justify-between">
                  <div className="flex items-center mr-4">
                    {salaryIcon}
                    <span className="text-gray-600">{job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    {locationIcon}
                    <span className="text-gray-600">{job.address}</span>
                  </div>
                </div>
                <div className="mt-6 mb-4">
                  <Link
                    to={`/job-details/${job.id}`}
                    className="btn-primary it"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {jobsData && visibleJobs < jobsData.length && (
        <div className="flex justify-center mt-8">
          <button className="btn-primary" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturesJob;
