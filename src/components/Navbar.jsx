import React, { useState } from "react";
//import { Link } from "react-scroll";
import { Link } from 'react-router-dom'; // Import Link
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import img from "../assets/img/Hasta-Logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed top-9 w-full z-10 text-customPurple">
      <div>
        <div className=" flex flex-row justify-between p-3 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] items-center">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
            <div className="h-[68px] bg-white rounded-b-lg flex justify-center items-center p-2 px-4">
              <img className="w-[180px] h-[63px]" src={img} alt="img" />
            </div>
            </Link>
          </div>

          
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
  <ul className="flex space-x-8"> {/* Add flex and space-x-8 here */}
    <li>
      <Link
        to="/home" // Use "/" for routing
        className="hover:text-hoverColor transition-all cursor-pointer"
      >
        Home
      </Link>
    </li>
    
    <li>
      <Link
        to="/about" // Use "/" for routing
        className="hover:text-hoverColor transition-all cursor-pointer"
      >
        About Us
      </Link>
    </li>

    <li>
      <Link
        to="/services" // Use "/" for routing
        className="hover:text-hoverColor transition-all cursor-pointer"
      >
        Services
      </Link>
    </li>
    
    <li>
      <Link
        to="/doctors" // Use "/" for routing
        className="hover:text-hoverColor transition-all cursor-pointer"
      >
        Doctors
      </Link>
    </li>
    
    <li>
      <Link
        to="/blog" // Use "/" for routing
        className="hover:text-hoverColor transition-all cursor-pointer"
      >
        Blog
      </Link>
    </li>
  </ul>
</nav>


          <div className=" hidden lg:flex items-center justify-center h-full">
            <button
              className="h-[48px] text-customPurple bg-customYellow px-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Book an Appointment
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </Link>

          <div className=" lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
