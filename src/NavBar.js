import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Put your name here
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <NavItem
              currentUrl={ this.props.location.pathname }
              link="/about"
              text="About me"
            />
            <NavItem
              currentUrl={ this.props.location.pathname }
              link="/contact"
              text="Contact me"
            />
          </ul>
        </div>
      </nav>
    )
  }
}
const NavItem = ({ currentUrl, link, text }) => {
  return (
    <li className="nav-item">
      <Link
        to={ link }
        className={
          ( (currentUrl === link) && "nav-link active" ) || "nav-link"
        }
      >
        { text }
      </Link>
    </li>
  );
}

export default withRouter( NavBar );
