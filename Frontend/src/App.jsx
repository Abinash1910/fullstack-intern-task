import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 space-x-4">
        <Link to="/">Home</Link>
        <Link to="/form">Register</Link>
        <Link to="/display">Display</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </Router>
  );
}

export default App;
