import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Navibar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    
      <div className="mystyle"> 
        <Navibar />
        <Wrapper>
        <HashRouter basename="/">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </HashRouter>
        </Wrapper>
        <Footer />
      </div>
    
  );
}

export default App;
