import React from "react";
import { Link } from 'react-router-dom'; // Import Link
import img from "../assets/img/Hasta-Logo2.png";
import { FaUserMd, FaStethoscope, FaFacebookF, FaInstagram, FaLinkedinIn  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#5A3E67] text-white rounded-lg p-10 mx-5 lg:mx-36 my-16">
      {/* Boxed Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First Grid: Logo and Caption */}
        <div className="flex flex-col">
          <div className="mb-4">
          <img className="w-[143px] h-[50px]" src={img} alt="img" />
            <p className="mt-3">Book Your Consultation with the Best Dental-Skin Clinic in Trivandrum.</p>
          </div>
          <button className="flex items-center gap-2 border-2 border-white text-white px-4 py-2 rounded-md mb-2 hover:bg-white hover:text-[#5A3E67]">
  <FaUserMd className="text-lg" />
  <Link
                      to="/about" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Find a Doctor
                    </Link>
</button>
<button className="flex items-center gap-2 border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#5A3E67]">
  <FaStethoscope className="text-lg" />
  <Link
                      to="/packages/teenagerspack" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Explore Treatment
                    </Link>
</button>
<div className="flex gap-4 mt-4">
        <a
          href="https://www.facebook.com/hastawellnesstrivandrum"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full text-white hover:bg-white hover:text-[#1877F2]"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/hasta_wellness/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full text-white hover:bg-white hover:text-[#C13584]"
        >
          <FaInstagram />
        </a>
      </div>
        </div>

        {/* Second Grid: Menu 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Clinic</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">
            <Link
                      to="/" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Home
                    </Link>
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              <Link
                      to="/about" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      About Us
                    </Link>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Dental</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">
            <Link
                      to="/treatments/cosmetic-dentistry" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Cosmetic Dentistry
                    </Link>
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              <Link
                      to="/treatments/smile-designing" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Smile Designing
                    </Link>
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
            <Link
                      to="/treatments/gum-treatment" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Gum Treatment
                    </Link>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Hair care</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">
            <Link
                      to="/treatments/laser-hair-removal" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Laser Hair Removal
                    </Link>
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              <Link
                      to="/treatments/prp-treatment" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      PRP Treatment
                    </Link>
            </li>
          </ul>
        </div>

        {/* Third Grid: Menu 2 */}
        <div>
        <h3 className="text-lg font-semibold mb-3 mt-6">Skin care</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">
            <Link
                      to="/treatments/anti-aging" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Anti-aging
                    </Link>
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              <Link
                      to="/treatments/chemical-peels" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Chemical Peel
                    </Link>
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
            <Link
                      to="/treatments/carbon-peels" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Carbon Peel
                    </Link>
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
            <Link
                      to="/treatments/mesotherapy" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Mesotherapy
                    </Link>
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
            <Link
                      to="/treatments/tattoo-removal" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Tattoo Removal
                    </Link>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 mt-6">Diet and Body</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">
            <Link
                      to="/treatments/body-contouring" // Use "/" for routing
                      className="hover:text-hoverColor transition-all text-sm cursor-pointer"
                    >
                      Body Contouring
                    </Link>
            </li>
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
          <p className="mb-1">Phone: +91 97784 58883</p>
          <p>Email: hello@hastawellnessclinic.com</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-6">
        <p>© 2024 Hasta Wellness Clinic. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
