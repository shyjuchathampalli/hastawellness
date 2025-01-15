import React from "react";
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo"; 
import BodyContouring from "./packages/BodyContouring";
import PregnencyWellness from "./packages/PregnencyWellness";
import TeenagersPack from "./packages/TeenagersPack";
import AntihairfallPack from "./packages/AntihairfallPack";
import AntiagingPack from "./packages/AntiagingPack";
import CosmeticDentistry from "./treatments/CosmeticDentistry";
import LaserhairRemoval from "./treatments/LaserhairRemoval";
import AntiAging from "./treatments/AntiAging";
import SmileDesigning from "./treatments/SmileDesigning";
import PrpTreatment from "./treatments/PrpTreatment";
import ChemicalPeels from "./treatments/ChemicalPeels";
import CarbonPeels from "./treatments/CarbonPeels";
import Mesotherapy from "./treatments/Mesotherapy";
import BodySculpting from "./treatments/BodySculpting";
import GumTreatment from "./treatments/GumTreatment";
import TattooRemoval from "./treatments/TattooRemoval";

import ReactGA from 'react-ga';
ReactGA.initialize('G-R7SYFM0YGZ');

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

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
          <Route path="/packages/bodycontouring" element={<BodyContouring />} /> {/* Services Page */}
          <Route path="/packages/pregnancywellness" element={<PregnencyWellness />} /> {/* Services Page */}
          <Route path="/packages/teenagerspack" element={<TeenagersPack />} /> {/* Services Page */}
          <Route path="/packages/antihairfallpack" element={<AntihairfallPack />} /> {/* Services Page */}
          <Route path="/packages/antiagingpack" element={<AntiagingPack />} /> {/* Services Page */}
          <Route path="/treatments/cosmetic-dentistry" element={<CosmeticDentistry />} /> {/* Treatment Page */}
          <Route path="/treatments/laser-hair-removal" element={<LaserhairRemoval />} /> {/* Treatment Page */}
          <Route path="/treatments/anti-aging" element={<AntiAging />} /> {/* Treatment Page */}
          <Route path="/treatments/smile-designing" element={<SmileDesigning />} /> {/* Treatment Page */}
          <Route path="/treatments/prp-treatment" element={<PrpTreatment />} /> {/* Treatment Page */}
          <Route path="/treatments/chemical-peels" element={<ChemicalPeels />} /> {/* Treatment Page */}
          <Route path="/treatments/carbon-peels" element={<CarbonPeels />} /> {/* Treatment Page */}
          <Route path="/treatments/mesotherapy" element={<Mesotherapy />} /> {/* Treatment Page */}
          <Route path="/treatments/body-contouring" element={<BodySculpting />} /> {/* Treatment Page */}
          <Route path="/treatments/gum-treatment" element={<GumTreatment />} /> {/* Treatment Page */}
          <Route path="/treatments/tattoo-removal" element={<TattooRemoval />} /> {/* Treatment Page */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
