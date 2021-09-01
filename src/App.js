import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Hero />
      </Router>
    </>
  );
}

export default App;
