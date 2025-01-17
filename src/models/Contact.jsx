import React, { useState } from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
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
    const message = `Hello, I would like to book an appointment. Here are my details:%0A
    First Name: ${userFirstName}%0A
    Last Name: ${userLastName}%0A
    Email: ${userEmail}%0A
    Phone No.: ${userNumber}%0A
    Treatment for: ${treatmentType}`;

    // Redirect to WhatsApp
    window.open(`https://wa.me/919778458883?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-semibold text-center text-customPurple">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#f2f2f2] rounded-lg"
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
              className="py-3 px-2 bg-[#f2f2f2] rounded-lg"
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
              className="py-3 px-2 bg-[#f2f2f2] rounded-lg"
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
              className="py-3 px-2 bg-[#f2f2f2] rounded-lg"
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
              className="py-3 px-2 bg-[#f2f2f2] rounded-lg"
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
            <Button className="bg-customPurple text-white px-10 rounded-md" title="Book Appointment" type="submit" />
            <button
              className="bg-customYellow text-white px-10 rounded-md active:bg-red-500"
              type="button"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
