import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJobsData } from "./Utils";
import { getAppliedJobs, setAppliedJobs } from "./Utils";

const JobDetails = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobsData();
        const selectedJob = data.find((job) => job.id === parseInt(jobId, 10));
        setJobDetails(selectedJob);
        setLoading(false);
      } catch (error) {
        setError("Error fetching job details");
        setLoading(false);
      }
    };

    fetchData();
  }, [jobId]);

  const salaryIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const noteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );

  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );

  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );

  const AddressIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
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

  return (
    <div className="my-container">
      <h2 className="text-3xl text-center font-bold mb-6">Job Details</h2>

      {loading ? (
        <p>Loading job details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <p className="text-[#757575] mb-4">
              <span className="font-bold text-black">Job Description:</span>{" "}
              {jobDetails.jobDescription}
            </p>
            <p className="text-[#757575] mb-4">
              <span className="font-bold text-black">Job Responsibility:</span>{" "}
              {jobDetails.jobResponsibility}
            </p>
            <p className="text-[#757575] mb-4">
              <span className="font-bold text-black">
                Educational Requirements:
              </span>{" "}
              <br /> {jobDetails.educationalRequirements}
            </p>
            <p className="text-[#757575]">
              <span className="font-bold text-black">Experience:</span>
              <br /> {jobDetails.experiences}
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="bg-purple-100">
              <h4 className="font-bold border-b-2 text-center border-purple-200 p-2">
                Job Details
              </h4>
              <div className="flex items-center p-2">
                {salaryIcon}
                <p className="text-[#757575]">
                  <span className="font-bold text-black">Salary:</span>{" "}
                  {jobDetails.salary}
                </p>
              </div>
              <div className="flex items-center p-2">
                {noteIcon}
                <p className="text-[#757575]">
                  <span className="font-bold text-black">Position:</span>{" "}
                  {jobDetails.position}
                </p>
              </div>
            </div>
            <div className="bg-purple-100 text-center">
              <h4 className="font-bold border-b-2 text-center border-purple-200 p-2">
                Contact Information
              </h4>
              <div className="flex items-center p-2">
                {phoneIcon}
                <p className="text-[#757575]">
                  <span className="font-bold text-black">Phone:</span>017407452{" "}
                </p>
              </div>
              <div className="flex items-center p-2">
                {emailIcon}
                <p className="text-[#757575]">
                  <span className="font-bold text-black">Email:</span>{" "}
                  info@gmail.com
                </p>
              </div>
              <div className="flex items-center p-2">
                {AddressIcon}
                <p className="text-[#757575]">
                  <span className="font-bold text-black">Address:</span>{" "}
                  {jobDetails.address}
                </p>
              </div>
              <button
                className="btn-primary mx-auto mb-8 w-full md:w-auto"
                onClick={() => {
                  const appliedJobs = getAppliedJobs();
                  const isAlreadyApplied = appliedJobs.some(
                    (job) => job.id === jobDetails.id
                  );

                  if (!isAlreadyApplied) {
                    const updatedAppliedJobs = [...appliedJobs, jobDetails];
                    setAppliedJobs(updatedAppliedJobs);
                  }

                  history.push("/applied-jobs");
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
