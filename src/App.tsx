import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className=" w-[95%] mx-auto flex flex-col  md:flex-row md:min-h-[900px]">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
