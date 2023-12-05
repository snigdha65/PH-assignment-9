import React from "react";

const JobCategory = () => {
  const jobCategories = [
    {
      icon: "https://logos-world.net/wp-content/uploads/2022/05/Google-Photos-Logo.png",
      name: "Software Engineer",
      jobOpenings: 300,
    },
    {
      icon: "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png",
      name: "Data Scientist",
      jobOpenings: 100,
    },
    {
      icon: "https://www.cnet.com/a/img/resize/eac6060c4c12d553103096f7bd5c3977ffe20764/hub/2023/03/29/8a57381e-14de-4373-9746-53dc62e1fbee/gettyimages-1291208045.jpg?auto=webp&fit=crop&height=675&width=1200",
      name: "UX Designer",
      jobOpenings: 223,
    },
    {
      icon: "https://images.ctfassets.net/lzny33ho1g45/2qBwGffPWl58WzSqxqeXax/8ebd7d79df74993d4473af62d01f97a2/Google_Bard.jpg",
      name: "Project Manager",
      jobOpenings: 55,
    },
  ];

  return (
    <div className="my-container flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Job Category List</h2>
      <p className="text-center text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. It's your future.
      </p>
      <div className="flex flex-wrap gap-4 mt-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {jobCategories.map((jobCategory) => (
          <div
            key={jobCategory.name}
            className="bg-gray-200 rounded-lg shadow-md p-6 mb-4"
          >
            <img
              src={jobCategory.icon}
              alt={jobCategory.name}
              className="w-full h-16 rounded-t-lg"
            />

            <h3 className="text-lg font-bold mt-2">{jobCategory.name}</h3>
            <p className="text-[#A3A3A3]">{`${jobCategory.jobOpenings} Job Openings`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
