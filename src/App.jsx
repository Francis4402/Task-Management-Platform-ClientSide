import {Outlet} from "react-router-dom";
import Navbar from "./Components/HomeRoutes/Navbar.jsx";

function App() {

  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default App
