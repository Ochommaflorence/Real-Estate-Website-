import React, {useState} from 'react';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import DropDown from "./components/DropDown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar toggle={toggle}/>
        <DropDown isOpen={isOpen} toggle={toggle}/>
        <Hero slides={SliderData} />
      </Router>
    </>
  );
}

export default App;
