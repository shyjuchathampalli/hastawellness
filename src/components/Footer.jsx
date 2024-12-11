import React from "react";
import img from "../assets/img/Hasta-Logo.png";
import { FaUserMd, FaStethoscope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#5A3E67] text-white rounded-lg p-10 mx-5 lg:mx-36 my-16">
      {/* Boxed Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First Grid: Logo and Caption */}
        <div className="flex flex-col">
          <div className="mb-4">
          <img className="w-[180px] h-[63px]" src={img} alt="img" />
            <p className="mt-3">Your trusted partner for healthcare excellence.</p>
          </div>
          <button className="flex items-center gap-2 border-2 border-white text-white px-4 py-2 rounded-md mb-2 hover:bg-white hover:text-[#5A3E67]">
  <FaUserMd className="text-lg" /> Find a Doctor
</button>
<button className="flex items-center gap-2 border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#5A3E67]">
  <FaStethoscope className="text-lg" /> Explore Treatment
</button>

        </div>

        {/* Second Grid: Menu 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Menu 1</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">Home</li>
            <li className="mb-2 hover:underline cursor-pointer">About Us</li>
            <li className="mb-2 hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Third Grid: Menu 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Menu 2</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">Blog</li>
            <li className="mb-2 hover:underline cursor-pointer">FAQs</li>
            <li className="mb-2 hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Fourth Grid: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe to Newsletter</h3>
          <form className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-black mb-3"
            />
            <button className="bg-white text-[#5A3E67] px-4 py-2 w-full rounded-md hover:bg-gray-200">
              Subscribe
            </button>
          </form>
          <p className="mb-1">Phone: +1 234 567 890</p>
          <p>Email: contact@example.com</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-6">
        <p>© 2024 Your Company. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
