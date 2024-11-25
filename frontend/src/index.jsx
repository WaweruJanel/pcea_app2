import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import './assets/fontawesome/css/all.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
