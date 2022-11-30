import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";
import { WhatsApp } from "./WhatsApp";
// import AccessTimeIcon from '@mui/icons-material/AccessTime';

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Project />
       <Blog />
       <Contact />
       <Footer />
       {/* <Routes><Route path="/what" element={<WhatsApp/>}></Route></Routes> */}
    </div>
  );
}

export default App;
