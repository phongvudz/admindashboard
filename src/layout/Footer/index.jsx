import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center font-semibold text-md mt-10 flex-col md:flex-row  text-center gap-8">
      <h1 className="mb-10 md:mb-0">
        © 2022Horizon UI. All Rights Reserved. Made with love by Phong Vu
      </h1>
      <ul className="flex items-center space-x-10">
        <li>Support </li>
        <li>License </li>
        <li>Terms of Use </li>
        <li>Blog </li>
      </ul>
    </div>
  );
};

export default Footer;
