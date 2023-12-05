// utils/api.js
export const fetchJobsData = async () => {
  try {
    const response = await fetch("/Jobs.json");
    if (!response.ok) {
      throw new Error("Failed to fetch jobs data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching jobs data:", error);
    return null;
  }
};

// Utils.js

export const getAppliedJobs = () => {
  const appliedJobs = localStorage.getItem("appliedJobs");
  return appliedJobs ? JSON.parse(appliedJobs) : [];
};

export const setAppliedJobs = (appliedJobs) => {
  localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
};
