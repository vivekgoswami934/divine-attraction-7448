import "./App.css";
import Navbarmain from "./Components/Navbar";
import Allroutes from "./Components/Pages/Allroutes";
import Page1 from "./Components/Pages/Page1";
import Page2 from "./Components/Pages/Page2";

function App() {
  return (
    <>
      {/* <h1>Jai Shree Ram</h1> */}
      <Navbarmain />
      <Allroutes />

      <Page1 />


      <Page2 />
    </>
  );
}

export default App;
