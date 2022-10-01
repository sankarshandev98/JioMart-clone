import Footer1 from "./Component/Footer/Footer";
import LandingPage from "./Pages/landingPage/LandingPage";
import Navbar from "./Component/Navbar Component/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
      <Footer1 />
    </BrowserRouter>
  )
}

export default App;
