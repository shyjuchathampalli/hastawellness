import React from 'react'
import Header from "../components/Header";
import Overview from "../components/Overview";
import AgingAccordion from "../components/AgingAccordion";
import Consult from "../components/Consult";
import image from '../assets/img/aging-package.png';
import icon from '../assets/img/aging-icon.png';

function AntiagingPack() {
  return (
    <div>
      <Header
        title="Anti-Aging Basic Pack"
        caption="Revitalize Your Skin: Essential Treatments for a Youthful Glow"
        Icon={icon} // Pass the icon as a prop
      />

<Overview
        title="Anti-Aging Basic Pack"
        caption="Revitalize Your Skin: Essential Treatments for a Youthful Glow"
        briefing="The Anti-Aging Basic Pack is thoughtfully designed to combat the signs of aging and promote a youthful complexion. This comprehensive program features effective treatments such as Carbon Peel and Laser Hair Removal (LHR), which work together to rejuvenate the skin and enhance its appearance. Alongside these treatments, the pack includes a personalized 3-month diet plan, essential blood diagnostics to monitor health, and expert consultations with a general physician."
        image={image} // Pass the icon as a prop
      />
      
  <AgingAccordion/>    
  <Consult/>    
    </div>
  )
}

export default AntiagingPack
