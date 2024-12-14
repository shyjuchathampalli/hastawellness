import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Import icons

const Consult = () => {
  return (
    <div className="bg-[#DABC70] text-white rounded-lg p-10 mx-5 lg:mx-36 my-16">
      <div className="flex flex-col lg:flex-row items-start justify-between">
        {/* Left side: Call to action and phone numbers */}
        <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl font-thin mb-4">Consult With Our Doctors</h2>
          <p className="text-lg mb-4">
            We provide dental and dermatological treatment to patients in a comfortable and caring environment.
          </p>
          <h3 className="text-xl font-semibold mb-2">Call us now:</h3>
          <div className="flex flex-col items-center lg:items-start">
          <a href="tel:+9778458883" className="text-lg mb-2 text-white hover:underline flex items-center">
    <FaPhoneAlt className="mr-2" /> {/* Icon with margin-right */}
    97784 58883
  </a>
  <a href="tel:+9778458884" className="text-lg text-white hover:underline flex items-center">
    <FaPhoneAlt className="mr-2" /> {/* Icon with margin-right */}
    85939 31833
  </a>
          </div>
        </div>

        {/* Right side: Book Now Form */}
        <div className="flex flex-col lg:w-1/2 lg:mt-0 px-10 items-end justify-between">
          <form className="w-full max-w-md space-y-5 px-5 border-l-2 border-dashed border-white">
            <h3 className="text-3xl font-thin text-center text-backgroundColor">
              Book an Appointment
            </h3>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#ffffff] rounded-lg"
                type="text"
                name="userFirstName"
                id="userFirstName"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#ffffff] rounded-lg"
                type="text"
                name="userLastName"
                id="userLastName"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#ffffff] rounded-lg"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#ffffff] rounded-lg"
                type="number"
                name="userNumber"
                id="userNumber"
                placeholder="Phone No."
              />
            </div>
            <div className="flex gap-5">
              <button
                className="bg-customPurple text-white px-10 py-2 rounded-md active:bg-red-500"
                type="submit"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consult;
