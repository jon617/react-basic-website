import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Page Home">
        <p>
          Welcome to my webpage.
        </p>
        <p>
          <img src="/img/jon-statue.png" alt="" />
        </p>
      </div>
    );
  }
}
export default Home;
