import React from "react";

const Header = ({ title, caption, Icon }) => {
  return (
    <div className="bg-customPurple text-white text-center py-10 h-[320px] mt-[106px] flex flex-col justify-center items-center">
      <div className="text-6xl mb-4">
        <Icon />
      </div>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg">{caption}</p>
    </div>
  );
};

export default Header;