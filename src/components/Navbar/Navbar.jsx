import React from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        <BsFillCloudSunFill
          size={"24px"}
          color={"#e9c46a"}
          className="cursor-pointer"
        />
      </div>
      <ul className="ml-auto text-16 font-semibold">
        <HiOutlineMenu />
      </ul>
    </nav>
  );
};

export default Navbar;
