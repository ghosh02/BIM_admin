import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-[80px] bg-[#fff] flex items-center flex-row justify-between px-[32px] sticky top-0 z-50 ">
      <Link>
        <img src={Logo} alt="" className="w-[200px] h-[60px] object-cover" />
      </Link>

      {/* <select className="w-[57px] h-[32px]  border-[#EEE] border outline-none p-[4px] rounded-[4px] text-[14px] ">
        <option value="">EN</option>
        <option value="">EN</option>
        <option value="">EN</option>
      </select> */}
    </div>
  );
}

export default Navbar;
