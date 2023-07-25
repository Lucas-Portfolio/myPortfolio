import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Work from "./pages/Work.js";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
