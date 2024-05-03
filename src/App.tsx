import "./App.css";
import Middle from "./components/Middle";
import SingleUser from "./components/mv";
import Side from "./components/Side";
// import Vcard from "./components/Vcard";

// const data = [
//   {
//     name: "About",
//     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia inventore repudiandae ",
//   },
//   {
//     name: "Experience",
//     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia inventore repudiandae ",
//   },
//   {
//     name: "Hobbies",
//     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia inventore repudiandae ",
//   },
//   {
//     name: "Introduction",
//     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia inventore repudiandae ",
//   },
// ];
function App() {
  return (
    <div className=" flex bg-slate-100 h-[670px] gap-30px">
      <Side />
      <Middle />
      {/* <Vcard data={data} /> */}
      <SingleUser />
    </div>
  );
}

export default App;
