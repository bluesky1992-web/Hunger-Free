// import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Auth } from "./pages/auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
