import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-3xl font-bold">TecHunter</h3>
          <p className="text-gray-300 mt-2">
            There are many variations of passages of <br /> Lorem Ipsum, but the
            majority have suffered <br /> alteration in some form.
          </p>
          <p className="text-gray-300 mt-2">Connect with us</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-300 text-xl hover:text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-gray-300 text-xl hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-300 text-xl hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:space-x-6">
          <div>
            <h2 className="text-xl">Company</h2>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Latest News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl">Product</h2>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Prototype
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl">Support</h2>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Help Desk
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Developers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl">Contact</h2>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  524 Broadway, NYC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  +1 777-978-5570
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="text-gray-400 my-8" />

      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="text-gray-400 mb-2 mr-8 md:mb-0">
          @2023 CareerHub. All Rights Reserved
        </span>
        <span className="text-gray-400">Powered by CareerHub</span>
      </div>
    </footer>
  );
};

export default Footer;
