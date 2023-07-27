import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mainbody from "./components/Mainbody";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainbody />} />
      </Routes>
    </>
  );
}

export default App;
