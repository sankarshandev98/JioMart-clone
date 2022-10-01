import Footer1 from "./Component/Footer/Footer";
import LandingPage from "./Pages/landingPage/LandingPage";
import Navbar from "./Component/Navbar Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer1 />
    </BrowserRouter>
  )
}

export default App;
