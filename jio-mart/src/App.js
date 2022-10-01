import AllRoutes from "./Pages/AllRoutes";
import Navbar from "./Component/Navbar Component/MainNavbar";
import Footer1 from "./Component/Footer/Footer";
import LandingPage from "./Pages/landingPage/LandingPage";


function App() {
  return <div className="App">
    <Navbar />
    <AllRoutes />
    <LandingPage />
    <Footer1 />
  </div>
}

export default App;
