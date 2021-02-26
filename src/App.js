import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
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
    <Router>
      <div className="mystyle"> 
        <Navibar />
        <Wrapper>
        
          <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
