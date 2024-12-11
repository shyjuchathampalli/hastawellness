import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo"; // Import the new 

const App = () => {
  return (
    <div>
      <ContactInfo />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/doctors" element={<Doctors />} /> {/* Doctors Page */}
          <Route path="/services" element={<Services />} /> {/* Services Page */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
