import "./App.css";
import Navbarmain from "./Components/Navbar";
import SigninPage from "./Components/NavPages/SigninPage";
import Allroutes from "./Components/Pages/Allroutes";

import Prefooter from "./Components/Pages/Prefooter";
import Footer from "./Components/Footer";
import Home from "./Components/NavPages/Home";
import Mainsigninpage from "./Components/NavPages/Mainsigninpage";

function App() {
  return (
    <>
      {/* <h1>Jai Shree Ram</h1> */}
      <Navbarmain />
      <Allroutes />
      {/* <Home />

      <Prefooter />
      <Footer /> */}
      {/* <Mainsigninpage /> */}
    </>
  );
}

export default App;
