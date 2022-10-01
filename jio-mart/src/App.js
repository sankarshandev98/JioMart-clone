import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import Navbar from "./Component/Navbar Component/Navbar";
import Footer1 from "./Component/Footer/Footer";
import LandingPage from "./Pages/landingPage/LandingPage";
import ProductLayout from "./Component/ProductLayout";


function App() {
  return <div className="App">
    <Navbar />
    <AllRoutes />
    <LandingPage />
    <ProductLayout />
    <Footer1 />
  </div>
}

export default App;
