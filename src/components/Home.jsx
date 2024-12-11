import React from "react";
import Banner from "./Banner"; // Import the Banner component
import Treatments from "./Treatments"; // Import the Banner component
import Featured from "./Featured"; // Import the Banner component
import Doctors from "./Doctors"; // Import the Banner component

// Import images from the src folder
import image1 from '../assets/img/home1.png';
import image2 from '../assets/img/home2.png';
import image3 from '../assets/img/home3.png';
import image4 from '../assets/img/home4.png';

const images = [image1, image2, image3, image4];

const Home = () => {
  return (
    <div>
      <Banner images={images} interval={5000} />
      <Treatments />
      <Featured />
      <Doctors />
    </div>
  );
};

export default Home;
