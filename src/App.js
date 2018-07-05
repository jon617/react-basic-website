import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';

// routes (pages)
import Home    from './Home';
import Contact from './Contact';

// css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">
                Put your name here
              </Link>
            </div>
          </div>
          <ul className="nav navbar-nav">
            <li className="active nav-item">
              <Link to="/contact" className="nav-link">
                Contact&nbsp;me
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/contact" component={ Contact } />
          <Route path="/" component={ Home } />
        </Switch>
      </div>
    );
  }
}


export default App;
