import React from 'react'
import Header from "../components/Header";
import Overview from "../components/Overview";
import HairfallAccordion from "../components/HairfallAccordion";
import Consult from "../components/Consult";
import image from '../assets/img/hairfall-package.png';
import icon from '../assets/img/hair-icon.png';

function AntihairfallPack() {
  return (
    <div>
      <Header
        title="Anti-Hair Fall Pack"
        caption="Combat hair loss and promote robust hair growth"
        Icon={icon} // Pass the icon as a prop
      />

<Overview
        title="Anti-Hair Fall Pack"
        caption="Combat hair loss and promote robust hair growth"
        briefing="The Anti-Hair Fall Pack is meticulously crafted to combat hair loss and promote robust hair growth. This comprehensive program includes a variety of effective treatments such as Dandruff Rub with Shower, Multi-vitamin Mesotherapy, and PRP Therapy, all designed to address the underlying causes of hair fall. Additionally, the pack features a personalized 3-month diet plan and essential blood diagnostics to monitor health and tailor treatments."
        image={image} // Pass the icon as a prop
      />
      
  <HairfallAccordion/>    
  <Consult/>    
    </div>
  )
}

export default AntihairfallPack
