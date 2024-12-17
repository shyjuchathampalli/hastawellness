import React from 'react'
import Header from "../components/Header";
import Overview from "../components/Overview";
import TeenagerAccordion from "../components/TeenagerAccordion";
import Consult from "../components/Consult";
import image from '../assets/img/teenagers-package.png';
import icon from '../assets/img/teenage-icon.png';

function TeenagersPack() {
  return (
    <div>
      <Header
        title="Teenagers Pack for Radiant Skin"
        caption="Tailored Treatments for Clear and Healthy Complexions"
        Icon={icon} // Pass the icon as a prop
      />

<Overview
        title="Teenagers Pack for Radiant Skin"
        caption="Tailored Treatments for Clear and Healthy Complexions"
        briefing="The Teenagers Pack is expertly designed to cater to the unique skincare needs of adolescents facing common skin challenges. This comprehensive program includes a variety of specialized treatments such as carbon peels, chemical peels, and IV antioxidants, all aimed at promoting healthy skin and addressing issues like acne and oiliness. With an emphasis on balanced nutrition through a personalized 3-month diet plan and essential blood diagnostics, this pack ensures a holistic approach to skincare."
        image={image} // Pass the icon as a prop
      />
      
  <TeenagerAccordion/>    
  <Consult/>    
    </div>
  )
}

export default TeenagersPack
