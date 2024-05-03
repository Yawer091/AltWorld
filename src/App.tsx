import "./App.css";
import Modal from "./components/Modal";
import Sidebar from "./components/Side";

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
    <>
      <div className="flex mt-[10px] ml-[30px]  h-[900px]">
        <Sidebar />
        <Modal />
      </div>
      {/* <Last /> */}
    </>
  );
}

export default App;
