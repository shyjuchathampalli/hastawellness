import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons

const ContactInfo = () => {
  return (
    <div className="fixed top-0 z-20 w-full flex items-center justify-between p-2 px-4 bg-gray-100">
      <div className="flex items-center text-gray-600 hidden md:flex"> {/* Set text color to #999 */}
        <FaPhoneAlt className="mr-2" />
        <span className="text-sm">+91 97784 58883</span>
      </div>
      <div className="flex items-center text-gray-600"> {/* Set text color to #999 */}
        <FaEnvelope className="mr-2" />
        <span className="text-sm">hello@hastawellnessclinic.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
