// import Home from "./Pages/Home";
import { Navbar } from "./Components/Navbar/Navbar";
// import {Curosel} from "./Components/Navbar/Curosel"
import Footer from "./Components/Footer";
import './App.css';
// import SearchComp from './Components/SearchComp';
import MainRoute from './Route/MainRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <MainRoute />
      <Footer/>
    </div>
  );
}

export default App;
