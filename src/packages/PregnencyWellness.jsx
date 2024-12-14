import React from 'react'
import Header from "../components/Header";
import Overview from "../components/Overview";
import TreatmentsAccordion from "../components/TreatmentsAccordion";
import Consult from "../components/Consult";
import { GiBabyFace  } from "react-icons/gi"; // Import a medical-related icon
import image from '../assets/img/pregnancy_wellness.png';
import icon from '../assets/img/motherhood.png';

function BodyContouring() {
  return (
    <div>
      <Header
        title="Post-Pregnancy Wellness Package"
        caption="Nurturing You: Embrace Your Post-Pregnancy Journey with Tailored Wellness Solutions."
        Icon={icon} // Pass the icon as a prop
      />

<Overview
        title="Post-Pregnancy Wellness Package"
        caption="Nurturing You: Embrace Your Post-Pregnancy Journey with Tailored Wellness Solutions."
        briefing="Our Post-Pregnancy Wellness Package is designed to support mothers in their journey to regain health and confidence after childbirth. This holistic program includes a combination of targeted treatments and personalized care, ensuring a safe and effective approach to post-pregnancy weight loss, skin rejuvenation, and overall wellness. With expert consultations and specialized therapies, we prioritize your health and well-being while helping you embrace your new role as a mother."
        image={image} // Pass the icon as a prop
      />
      
  <TreatmentsAccordion/>    
  <Consult/>    
    </div>
  )
}

export default BodyContouring
