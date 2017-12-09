import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Links</h3>
          <ul>
          <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/create/currency">
                Create Currency
              </Link>
            </li>
            <li>
              <Link to="/create/market">
                Create Market
              </Link>
            </li>
            <li>
              <Link to="/edit/market">
                Edit Market
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;