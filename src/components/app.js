import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  //this.props.children will have all the child components in a nested scenario.
  //see routes.js for nested components.
  render() {
    return (
      <div>
        <Link to="/">
          <img
          src="http://performancegrowthadvisors.com/wp-content/themes/flexibility3/images/headers/header-BlueSky.jpg"
          className=".img-fluid w-100" style={{height: '80px', marginBottom: '10px'}} />
        </Link>

        {this.props.children}

      </div>
    );
  }
}
