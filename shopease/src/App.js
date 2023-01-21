
import Home from "./Pages/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import {Curosel} from "./Components/Navbar/Curosel"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Curosel/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
