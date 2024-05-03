import SingleUser from "./SingleUser";
import Report from "./Report";
const Home = () => {
  return (
    <div className="w-full md:w-[90%] mx-auto">
      <nav className="mb-[20px]">
        <h3 className="text-gray-300 ml-[12px]">
          Pages <span className="text-black">/ Assignment</span>
        </h3>
        <h1 className="text-[26px] ml-[12px] font-semibold">Sales BDE</h1>
      </nav>
      <div className="w-full md:flex md:justify-between md:gap-8">
        <Report />
        <SingleUser />
      </div>
    </div>
  );
};

export default Home;
