import Middle from "./Middle";
import SingleUser from "./mv";
const Modal = () => {
  return (
    <div className="w-[90%] mx-auto">
      <nav className=" mb-[20px]">
        <h3 className="text-gray-300 ml-[12px]  ">
          {" "}
          Pages <span className="text-black  ">/ Assignment</span>
        </h3>
        <h1 className="text-[26px] ml-[12px] font-semibold">Sales BDE</h1>
      </nav>
      <div className=" w-[100%] mx-auto flex justify-between gap-[30px]">
        <Middle />
        <SingleUser />
      </div>
    </div>
  );
};

export default Modal;
