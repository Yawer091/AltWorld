import React from "react";
import Middle from "./Middle";

const Modal = () => {
  return (
    <div className="w-[80%] m-auto">
      <nav className=" mb-[20px]">
        <h3 className="text-gray-300 ml-[12px]  ">
          {" "}
          Pages <span className="text-black  ">/ Assignment</span>
        </h3>
        <h1 className="text-[26px] ml-[12px] font-semibold">Sales BDE</h1>
      </nav>
      <Middle />
    </div>
  );
};

export default Modal;
