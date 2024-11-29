import { Routes, Route } from "react-router-dom";
import { About, Home } from "./pages";
import './assets/fontawesome/css/all.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
    </Routes>
  );
}

export default App;
