import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
//Links to different postRoutes
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render(){
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand"> SnapClean </Link>
      <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
      <li className="navbar-item">
         <Link to="/jobs" className="nav-link">Job List</Link>
         <Link to="/user" className="nav-link">Create User</Link>
         <Link to="/edit" className="nav-link">Edit Job Listing</Link>
         </li>
        </ul>
        </div>
      </nav>
    );
  }
}
