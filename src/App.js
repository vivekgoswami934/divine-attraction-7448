import "./App.css";
import Navbarmain from "./Components/Navbar";
import SigninPage from "./Components/NavPages.jsx/SigninPage";
import Allroutes from "./Components/Pages/Allroutes";
import Page1 from "./Components/Pages/Page1";
import Page2 from "./Components/Pages/Page2";
import Page3 from "./Components/Pages/Page3";
import Page4 from "./Components/Pages/Page4";

function App() {
  return (
    <>
      {/* <h1>Jai Shree Ram</h1> */}
      <Navbarmain />
      <Allroutes />

       <Page1 />
      <Page2 />

      <Page3 />

      <Page4 />
       <SigninPage /> 
    </>
  );
}

export default App;
