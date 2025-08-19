import React, { useState } from "react";

const RegisterPage = () => {
  const [registerDetails, setRegisterDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });
  const registerSave = () => {
    window.alert("Your details " + JSON.stringify(registerDetails));
    console.log(registerDetails);
  };
  return (
    <div className="flex w-full h-full bg-[url(/Images/reg.9.jpg)] bg-no-repeat bg-cover">
      <div className=" w-175 h-screen items-center ">
        <div className="flex  pl-20 h-90 w-175 items-end">
          <h1 className="font-slab text-7xl text-white">REGISTER NOW</h1>
        </div>
        <div className="flex pl-20 h-50vh w-full mt-10 gap-12  ">
          <div className="flex w-25 h-25 border rounded-[50%]  border-white text-white items-center bg-emerald-400 justify-center font-slab">
            DAYS
          </div>
          <div className="flex w-25 h-25 border rounded-[50%]  border-white  text-white items-center bg-amber-400 justify-center font-slab">
            HOUR
          </div>
          <div className="flex w-25 h-25 border rounded-[50%]  border-white  text-white items-center bg-orange-400 justify-center font-slab">
            MINUTES
          </div>
          <div className="flex w-25 h-25 border rounded-[50%]  border-white text-white items-center bg-red-400 justify-center font-slab">
            SECOND
          </div>
        </div>
      </div>
      <div className="flex w-175 h-full justify-center ml-20 mt-5 ">
        <div className="flex-col w-125 h-80vh bg-white mt-25 mb-15 overflow-hidden">
          <div className=" flex w-125 h-50 bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-400 justify-center text-center  rounded-b-[70%] scale-[1.1]">
            <h1 className="font-slab text-2xl text-white py-10">
              Create Your Free Account Now and <br />
              immediately get access to Guides,
              <br />
              Learning Videos,Success Stories
              <br /> and News.
            </h1>
          </div>
          <div className="w-125 h-82 mt-10 p-10  ">
            <input
              className="border border-black/20 w-full h-10 pl-5 "
              value={registerDetails.name}
              onChange={(e) =>
                setRegisterDetails({ ...registerDetails, name: e.target.value })
              }
              placeholder="Your Name*"
            />
            <input
              className="border border-black/20 w-full h-10 mt-8 pl-5"
              placeholder="Your Email*"
              value={registerDetails.email}
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  email: e.target.value,
                })
              }
            />
            <input
              className="border border-black/20 w-full h-10 mt-8 pl-5"
              value={registerDetails.phone}
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  phone: e.target.value,
                })
              }
              placeholder="Phone*"
            />
            <button
              onClick={() => {
                registerSave();
              }}
              className="border w-full h-10 flex justify-center items-center mt-13 bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-400 text-white cursor-pointer"
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
