import React from "react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-slate-400 w-full mx-auto px-2 md:px-5">
      <div className="max-w-[90rem]">
        <div className="py-4 md:py-8 lg:mx-20 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h1 className="text-2xl font-bold mb-2 text-slate-800">
              Follow Us
            </h1>
            <div className="flex text-white gap-10 items-center">
              <FaGoogle />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2 text-slate-800">
              Contact Us
            </h1>
            <p>123 Main Street, Suite 100</p>
            <p>City, State Zipcode</p>
            <p>Email: yummy_yums@gmail.com</p>
            <p>Phone: 01902020202</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2 text-slate-800">
              Subscribe to Our Newsletter
            </h1>
            <p className="w-96">
              Stay up-to-date with the latest recipes, cooking tips, and news
              from Delicious Delight. Subscribe to our newsletter today!
            </p>
            <div className="flex gap-2 mt-2">
              <Link to="#" className="text-blue-800 hover:text-blue-700">
                {" "}
                Privacy Policy
              </Link>{" "}
              |
              <Link to="#" className="text-blue-800 hover:text-blue-700">
                {" "}
                Terms of Use
              </Link>{" "}
              |
              <Link to="#" className="text-blue-800 hover:text-blue-700">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
