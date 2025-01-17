import React, { useState } from "react";
import { FaPhoneAlt } from 'react-icons/fa'; // Import icons
import axios from 'axios';

const Consult = () => {

  const [formData, setFormData] = useState({
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userNumber: "",
      treatmentType: "Dental", // Default option
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const { userFirstName, userLastName, userEmail, userNumber, treatmentType } = formData;

      const payload = {
        full_name: userFirstName,
        last_name: userLastName,
        email: userEmail,
        phone: userNumber,
        treatment_type: treatmentType,
      };
    
      try {
        // Send data to Laravel backend
        const response = await axios.post("http://127.0.0.1:8000/api/enquiries", payload);
        console.log(response.data.message);
        alert("Your enquiry has been submitted!");
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code outside the range of 2xx
          console.error("Error Response:", error.response.data);
          console.error("Status:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No Response:", error.request);
        } else {
          // Something happened in setting up the request
          console.error("Error Message:", error.message);
        }
      }
  
      // Construct the WhatsApp message
      const message = `Hello, I would like to book an appointment with Hasta. Here are my details:%0A
      First Name: ${userFirstName}%0A
      Last Name: ${userLastName}%0A
      Email: ${userEmail}%0A
      Phone No.: ${userNumber}%0A
      Treatment for: ${treatmentType}`;
  
      // Redirect to WhatsApp
      //window.open(`https://wa.me/919778458883?text=${message}`, "_blank");
    };

  return (
    <div className="bg-[#DABC70] text-white rounded-lg p-10 mx-5 lg:mx-36 my-16">
      <div className="flex flex-col lg:flex-row items-start justify-between">
        {/* Left side: Call to action and phone numbers */}
        <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl font-thin mb-4">Consult With Our Doctors.......</h2>
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
          <form className="w-full max-w-md space-y-5 px-5 border-l-2 border-dashed border-white" onSubmit={handleSubmit}>
            <h3 className="text-3xl font-thin text-center text-backgroundColor">
              Book an Appointment
            </h3>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#ffffff] rounded-lg select-text-color"
                type="text"
                name="userFirstName"
                id="userFirstName"
                placeholder="First Name"
                value={formData.userFirstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#ffffff] rounded-lg select-text-color"
                type="text"
                name="userLastName"
                id="userLastName"
                placeholder="Last Name"
                value={formData.userLastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#ffffff] rounded-lg select-text-color"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Your Email"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#ffffff] rounded-lg select-text-color"
                type="number"
                name="userNumber"
                id="userNumber"
                placeholder="Phone No."
                value={formData.userNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
            <label htmlFor="treatmentType" className="text-sm font-medium text-gray-700">
              Treatment for
            </label>
            <select
              className="py-3 px-2 bg-[#ffffff] rounded-lg select-text-color"
              name="treatmentType"
              id="treatmentType"
              value={formData.treatmentType}
              onChange={handleChange}
              required
            >
              <option value="Dental">Dental</option>
              <option value="Skin care">Skin care</option>
              <option value="Hair care">Hair care</option>
              <option value="Diet">Diet</option>
              <option value="Body Contouring">Body Contouring</option>
            </select>
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
