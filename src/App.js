import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Nav from './Nav'
import Home from './Greeting'
import About from './About';
import Contact from './Contact';
import Project from './Project';


function App() {
  return (
    <div className="App">

      <Router>
        <header>
          <div className="title-container">
            <Link to="/"><h1>WOOJUN.KANG</h1></Link>
          </div>
        </header>

        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contact-me">
            <Contact />
          </Route>
        </Switch>

      </Router>

      <footer>
        <div>here is a footer</div>
      </footer>

    </div>
  );
}

export default App;
