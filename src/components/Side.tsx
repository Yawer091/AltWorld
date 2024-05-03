import React from "react";
import log from "../assets/crlogo.jpeg";

const Side = () => {
  return (
    <div className="w-[22%] ml-[20px] my-[20px]">
      <h1 className="text-[22px] font-bold mb-[18px]">
        <img
          className="bg-gray-500 w-[36px] inline-block mr-[16px]"
          src={log}
          alt="Logo"
        />
        Hi, AltWorld
      </h1>
      <hr className="w-[80%]" />
      <h2 className="text-[20px] my-[40px] font-semibold">
        <span className="bg-white p-[4px] rounded-[14px] mr-[14px]">🏠</span>{" "}
        DashBoard
      </h2>
      <div className="w-[90%]  my-[20px] text-white bg-teal-400 rounded-[10px] p-[20px]">
        <button className="mb-[10px] bg-white p-[6px] rounded-[12px]">
          ➕
        </button>
        <p className="font-semibold text-[18px]">New Assignment ?</p>
        <p className="mt-[10px] mb-[16px]">
          Select from pre-defined questions to have a quick turnaround.
        </p>
        <div className="w-[95%] mx-auto rounded-[10px]">
          <button className="p-[14px] bg-white w-full text-black rounded-[22px] font-semibold">
            Create new Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Side;
