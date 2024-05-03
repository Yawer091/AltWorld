import React, { useState } from "react";
import log from "../assets/crlogo.jpeg";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  useToast,
} from "@chakra-ui/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toast = useToast();

  const handlePopoverOpen = () => {
    setIsOpen(true);
  };

  const handlePopoverClose = () => {
    setIsOpen(false);
  };

  const handleAddButtonClick = () => {
    toast({
      title: "Login",
      description: "Please Login and then try to Add notes",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`w-full md:w-[22%] ml-[20px] my-[20px] ${
        isSidebarOpen ? "md:ml-[20px]" : "md:ml-0"
      }`}
    >
      <button
        className="md:hidden fixed top-4 left-4 bg-white p-2 rounded-full flex items-center justify-center"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <img className="w-6 h-6" src={log} alt="Open" />
        ) : (
          <span>✖️</span>
        )}
      </button>
      <div className={`md:block ${isSidebarOpen ? "block" : "hidden"}`}>
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
          <button
            className="mb-[10px] bg-white p-[6px] rounded-[12px]"
            onClick={handleAddButtonClick}
          >
            ➕
          </button>
          <p className="font-semibold text-[18px]">New Assignment ?</p>
          <p className="mt-[10px] mb-[16px]">
            Select from pre-defined questions to have a quick turnaround.
          </p>
          <div className="w-[95%] mx-auto rounded-[10px]">
            <Popover isOpen={isOpen} onClose={handlePopoverClose}>
              <PopoverTrigger>
                <Button
                  className="p-[14px] bg-white w-full text-black rounded-[22px] font-semibold"
                  onClick={handlePopoverOpen}
                >
                  Create new Assignment
                </Button>
              </PopoverTrigger>
              <PopoverContent className=" text-gray-400">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>
                  Are you sure you want to Create Assignment?
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
