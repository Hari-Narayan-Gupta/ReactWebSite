// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Service from './Component/Service';
import { Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
// import { createContext } from 'react';

// const FirstName = createCnpm startontext();
function App() {

  return (
    <>
    {/* <FirstName.Provider value={"TechTool"}> */}
    <Navbar title="TechTool"/>
    {/* </FirstName.Provider> */}
    <Routes>
       <Route  exact path="/"  element={<Home />} />
       <Route  exact path="/about"  element={<About />} />
       <Route  exact path="/service"  element={<Service />} />
       <Route  exact path="/contact"  element={<Contact />} />
       {/* <Redirect to="/" /> */}
    </Routes>
    </>
  );
}

export default App;
