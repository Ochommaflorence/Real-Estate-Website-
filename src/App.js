import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Hero slides={SliderData} />
      </Router>
    </>
  );
}

export default App;
