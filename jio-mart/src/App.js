import "./App.css";
import Navbar from "./Navbar Component/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import drop from "./Dropdown.module.css";
import Nav from "./Dropdown Component/Nav";

function App() {
  return <div className="App">
    <Navbar />
    <AllRoutes />
    <Nav />
  </div>
}

export default App;
