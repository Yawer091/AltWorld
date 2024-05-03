import "./App.css";
import Modal from "./components/Modal";
import Sidebar from "./components/Side";

function App() {
  return (
    <>
      <div className=" flex mt-[10px] ml-[30px]  h-[900px]">
        <Sidebar />
        <Modal />
      </div>
      {/* <Last /> */}
    </>
  );
}

export default App;
