import { Button } from "@/components/ui/button";

import React, { useState } from "react";

import { CiLock } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function CreateUser() {
  const containerStyle = {
    width: "100%",
    height: "49px",
    border: "1px solid #fff",
    borderRadius: "8px",
  };
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    alert("submitted");
  };

  return (
    <div className="flex-1 mx-[32px] mt-[32px]">
      <Link to="/user">
        <div className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]">
          <IoMdArrowBack />

          <p>Back</p>
        </div>
      </Link>
      <div className="w-[626px] p-[20px] bg-[#fff] rounded-[8px]">
        <h1 className="font-[600] text-[20px]">General information</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mt-[20px]">
            <label
              htmlFor="firstName"
              className="text-[14px] mb-[4px] font-[500]"
            >
              First Name
            </label>
            <input
              className="w-full h-[49px] shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px] "
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="false"
              value={userData.firstName}
              onChange={handleInputs}
            />
          </div>
          <div className="mt-[20px]">
            <label
              htmlFor="lastName"
              className="text-[14px] mb-[4px] font-[500]"
            >
              Last Name
            </label>
            <input
              className="w-full h-[49px]  shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px] "
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="false"
              value={userData.lastName}
              onChange={handleInputs}
            />
          </div>

          <div className="mt-[20px]">
            <label htmlFor="email" className="text-[14px] mb-[4px] font-[500]">
              Email address
            </label>
            <input
              className="w-full h-[49px]  shadow-none border  outline-none pl-2 bg-[#FAFAFA] rounded-[8px] "
              type="text"
              id="email"
              name="email"
              autoComplete="false"
              value={userData.email}
              onChange={handleInputs}
            />
          </div>
          <div className="w-full"></div>
          <div className="w-full h-[49px] mt-[20px]">
            <label className="text-[14px] mb-[4px] font-[500]">
              Phone Number
            </label>
            <PhoneInput
              inputStyle={{
                width: "100%",
                height: "100%",
                backgroundColor: "#FAFAFA",
              }}
              containerStyle={containerStyle}
              className="w-full"
              country={"in"}
              placeholder="Enter phone number"
            />
          </div>

          <div className="mt-[50px]">
            <label
              htmlFor="password"
              className="text-[14px] mb-[4px] font-[500]"
            >
              Password
            </label>
            <div className="flex items-center justify-between h-[49px] border bg-[#FAFAFA] px-[16px] py-[16px] rounded-[8px]">
              <CiLock />
              <input
                className="flex-1 h-[46px] bg-transparent  shadow-none border-none outline-none pl-2  rounded-[8px] "
                type={show ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="false"
                value={userData.password}
                onChange={handleInputs}
              />
              <Link
                className="text-[#72849A80] text-[12px]"
                onClick={() => setShow(!show)}
              >
                {show ? "Hide" : "Show"}
              </Link>
            </div>
          </div>
          <div className="flex gap-[20px] mt-[20px]">
            <button className="w-[83px] h-[45px] text-base font-semibold font-sans px-2 text-black py-2 rounded-[8px] border-2 border-[#000] transition-all duration-200 bg-[#fff]   focus:outline-none focus:ring-2 focus:ring-offset-2">
              Cancel
            </button>
            <button
              type="submit"
              className="w-[83px] h-[45px] text-base font-semibold font-sans px-2 text-white py-2 rounded-[8px] border-none  submit_btn transition-all duration-200 bg-pink  border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
