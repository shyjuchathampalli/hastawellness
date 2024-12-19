import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import Contact from "../models/Contact";
import img from "../assets/img/Hasta-Logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);

const toggleDropdown = (menu) => {
  setActiveMenu(activeMenu === menu ? null : menu);
};

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
            <Link to="/" spy={true} smooth={true} duration={500}>
            <div className="h-[68px] bg-white rounded-b-lg flex justify-center items-center p-2 px-4">
              <img className="w-[143px] h-[50px]" src={img} alt="img" />
            </div>
            </Link>
          </div>

          
          <nav className="hidden lg:flex flex-row items-center text-sm font-medium gap-8">
  <ul className="flex space-x-8"> {/* Add flex and space-x-8 here */}
    <li>
      <Link
        to="/" // Use "/" for routing
        className="hover:text-hoverColor transition-all cursor-pointer"
      >
        Home
      </Link>
    </li>
    

  <li className="relative group">
  <span
    className="flex items-center hover:text-hoverColor transition-all cursor-pointer"
  >
    Dental <AiOutlineDown
      className="ml-1 transition-transform duration-300 group-hover:rotate-180"
    />
    
  </span>
  <ul
    className="absolute hidden text-customPurple group-hover:block bg-white text-black rounded shadow-lg text-sm min-w-[250px]"
  >
    <li>
  <Link
    to="/treatments/cosmetic-dentistry"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    Cosmetic Dentistry
  </Link>
</li>

<li>
  <Link
    to="/treatments/smile-designing"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    Smile Designing
  </Link>
</li>
<li>
  <Link
    to="/treatments/gum-treatment"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    Gum Treatment
  </Link>
</li>

  </ul>
</li>


<li className="relative group">
  <span
    className="flex items-center hover:text-hoverColor transition-all cursor-pointer"
  >
    Skin <AiOutlineDown
      className="ml-1 transition-transform duration-300 group-hover:rotate-180"
    />
    
  </span>
  <ul
    className="absolute hidden text-customPurple group-hover:block bg-white text-black rounded shadow-lg text-sm min-w-[250px]"
  >
<li>
  <Link
    to="/treatments/anti-aging"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    Anti-Aging
  </Link>
</li>
<li>
  <Link
    to="/treatments/chemical-peels"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    Chemical Peels
  </Link>
</li>
<li>
  <Link
    to="/treatments/carbon-peels"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    Carbon Peels
  </Link>
</li>
<li>
  <Link
    to="/treatments/mesotherapy"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    Mesotherapy
  </Link>
</li>
<li>
  <Link
    to="/treatments/tattoo-removal"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    Tattoo Removal
  </Link>
</li>

  </ul>
</li>


<li className="relative group">
  <span
    className="flex items-center hover:text-hoverColor transition-all cursor-pointer"
  >
    Hair care <AiOutlineDown
      className="ml-1 transition-transform duration-300 group-hover:rotate-180"
    />
    
  </span>
  <ul
    className="absolute hidden text-customPurple group-hover:block bg-white text-black rounded shadow-lg text-sm min-w-[250px]"
  >
<li>
  <Link
    to="/treatments/laser-hair-removal"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    Laser Hair Removal
  </Link>
</li>
<li>
  <Link
    to="/treatments/prp-treatment"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    PRP Treatment
  </Link>
</li>
  </ul>
</li>

<li className="relative group">
  <span
    className="flex items-center hover:text-hoverColor transition-all cursor-pointer"
  >
    Diet <AiOutlineDown
      className="ml-1 transition-transform duration-300 group-hover:rotate-180"
    />
    
  </span>
  <ul
    className="absolute hidden text-customPurple group-hover:block bg-white text-black rounded shadow-lg text-sm min-w-[250px]"
  >
<li>
  <Link
    to="/treatments/body-contouring"
    className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
  >
    Body Contouring
  </Link>
</li>
  </ul>
</li>


<li className="relative group">
  <span
    className="flex items-center hover:text-hoverColor transition-all cursor-pointer"
  >
    Packages<AiOutlineDown
      className="ml-1 transition-transform duration-300 group-hover:rotate-180"
    />
    
  </span>
  <ul
    className="absolute hidden text-customPurple group-hover:block bg-white text-black rounded shadow-lg text-sm min-w-[250px]"
  >
    <li>
      <Link
        to="/packages/pregnancywellness"
        className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
      >
        Post Pregnancy Weight Loss
      </Link>
    </li>
    <li>
      <Link
        to="/packages/bodycontouring"
        className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
      >
        Obesity Package
      </Link>
    </li>
    <li>
      <Link
        to="/packages/teenagerspack"
        className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
      >
        Teenager's Pack
      </Link>
    </li>
    <li>
      <Link
        to="/packages/antihairfallpack"
        className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
      >
        Anti-Hair Fall
      </Link>
    </li>
    <li>
      <Link
        to="/packages/antiagingpack"
        className="block px-4 py-2 hover:bg-hoverColor hover:text-white transition-all"
      >
        Anti-Aging
      </Link>
    </li>
  </ul>
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
          } lg:hidden flex flex-col absolute bg-customPurple text-white left-0 top-30 font-medium text-md text-center pt-8 pb-4 gap-8 w-full h-[auto] transition-transform duration-300`}
        >

<ul id="dropdown-menu" className="relative w-full mt-2 rounded-lg">
  <li>
    <div
      className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-hoverColor transition-all"
      onClick={() => toggleDropdown("home")}
    >
      <Link to="/" className="hover:text-hoverColor transition-all">Home</Link>
    </div>
  </li>

  <li>
    <div
      className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-hoverColor transition-all"
      onClick={() => toggleDropdown("dental")}
    >
      <span>Dental</span>
      <AiOutlineDown className={`ml-1 transition-transform ${activeMenu === "dental" ? "rotate-180" : ""}`} />
    </div>
    {activeMenu === "dental" && (
      <ul className="bg-gray-50 text-sm text-customPurple">
        <li>
          <Link to="/treatments/cosmetic-dentistry" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            Cosmetic Dentistry
          </Link>
        </li>
        <li>
          <Link to="/treatments/smile-designing" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            Smile Designing
          </Link>
        </li>
        <li>
          <Link to="/treatments/gum-treatment" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            Gum Treatment
          </Link>
        </li>
      </ul>
    )}
  </li>

  <li>
    <div
      className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-hoverColor transition-all"
      onClick={() => toggleDropdown("skin")}
    >
      <span>Skin</span>
      <AiOutlineDown className={`ml-1 transition-transform ${activeMenu === "skin" ? "rotate-180" : ""}`} />
    </div>
    {activeMenu === "skin" && (
      <ul className="bg-gray-50 text-sm text-customPurple">
        <li>
          <Link to="/treatments/anti-aging" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            Anti-Aging
          </Link>
        </li>
        <li>
          <Link to="/treatments/chemical-peels" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            Chemical Peels
          </Link>
        </li>
        <li>
          <Link to="/treatments/carbon-peels" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            Carbon Peels
          </Link>
        </li>
        <li>
          <Link to="/treatments/mesotherapy" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            Mesotherapy
          </Link>
        </li>
        <li>
          <Link to="/treatments/tattoo-removal" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            Tattoo Removal
          </Link>
        </li>
      </ul>
    )}
  </li>

  <li>
    <div
      className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-hoverColor transition-all"
      onClick={() => toggleDropdown("haircare")}
    >
      <span>Hair care</span>
      <AiOutlineDown className={`ml-1 transition-transform ${activeMenu === "haircare" ? "rotate-180" : ""}`} />
    </div>
    {activeMenu === "haircare" && (
      <ul className="bg-gray-50 text-sm text-customPurple">
        <li>
          <Link to="/treatments/laser-hair-removal" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            Laser Hair Removal
          </Link>
        </li>
        <li>
          <Link to="/treatments/prp-treatment" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            PRP Treatment
          </Link>
        </li>
      </ul>
    )}
  </li>


  <li>
    <div
      className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-hoverColor transition-all"
      onClick={() => toggleDropdown("diet")}
    >
      <span>Diet</span>
      <AiOutlineDown className={`ml-1 transition-transform ${activeMenu === "diet" ? "rotate-180" : ""}`} />
    </div>
    {activeMenu === "diet" && (
      <ul className="bg-gray-50 text-sm text-customPurple">
        <li>
          <Link to="/treatments/body-contouring" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
            Body Contouring
          </Link>
        </li>
      </ul>
    )}
  </li>

  <li>
    <div
      className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-hoverColor transition-all"
      onClick={() => toggleDropdown("haircare")}
    >
      <span>Packages</span>
      <AiOutlineDown className={`ml-1 transition-transform ${activeMenu === "haircare" ? "rotate-180" : ""}`} />
    </div>
    {activeMenu === "haircare" && (
      <ul className="bg-gray-50 text-sm text-customPurple">
        <li>
          <Link to="/packages/pregnancywellness" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
          Post Pregnancy Weight Loss
          </Link>
        </li>
        <li>
          <Link to="/packages/bodycontouring" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
          Obesity Package
          </Link>
        </li>
        <li>
          <Link to="/packages/teenagerspack" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
          Teenager's Pack
          </Link>
        </li>
        <li>
          <Link to="/packages/antihairfallpack" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
          Anti-Hair Fall
          </Link>
        </li>
        <li>
          <Link to="/packages/antiagingpack" className="block px-6 py-2 hover:bg-hoverColor hover:text-white transition-all">
          Anti-Aging
          </Link>
        </li>
      </ul>
    )}
  </li>

  <li className="shadow-lg">
    <div
      className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-hoverColor transition-all"
      onClick={() => toggleDropdown("home")}
    >
      <Link to="/" className="hover:text-hoverColor transition-all">Blog</Link>
    </div>
  </li>

  <div className="lg:hidden">
    <button
      className="bg-customYellow text-white mx-2 mt-4 px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
      onClick={openForm}
    >
      Book an Appointment
    </button>
  </div>
</ul>


          

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
