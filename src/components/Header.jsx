import React from "react";
import picture from "../assets/P3OLGJ1 copy 1.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex flex-col bg-gray-100 lg:flex-row justify-between items-center my-container">
      <div className="">
        <h1 className="text-6xl font-bold ">
          One Step <br />
          Closer To Your <br />
          <span className="text-[#7E90FE]">Dream Job</span>
        </h1>
        <p className="text-[#757575] font-thin mt-8 mb-8">
          Explore thousands of job opportunities with all th <br /> information
          you need. Its your future. Come find it. Manage all <br /> your job
          application from start to finish.
        </p>
        <button className="btn-primary">Get Started</button>
      </div>

      <div>
        <img className="home-image" src={picture} alt="" />
      </div>
    </div>
  );
};

export default Header;
