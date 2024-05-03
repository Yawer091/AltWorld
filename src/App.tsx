import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex flex-col mx-[14px] md:flex-row md:min-h-[900px]">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
