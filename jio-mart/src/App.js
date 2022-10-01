import Footer1 from "./Component/Footer/Footer";
import LandingPage from "./Pages/landingPage/LandingPage";
import Navbar from "./Component/Navbar Component/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./Component/Navbar Component/Cart";


function App() {
  return <div className="App">
    <BrowserRouter>
      <Navbar />
      <div>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </div>
      <Footer1 />
    </BrowserRouter>
  </div>
}

export default App;
