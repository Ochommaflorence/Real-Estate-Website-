import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <>
    <Router>
      <GlobalStyle/>
    <Navbar/>
    </Router>
    </>
  );
}

export default App;
