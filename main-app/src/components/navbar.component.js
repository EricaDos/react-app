import React, { Component } from 'react';
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
        <Link to="/" className="nav-link">Detected Objects</Link>
        </li>
        <li className="navbar-item">
        <Link to="/upload" className="nav-link">Upload Image</Link>
        </li>
        <li className="navbar-item">
        <Link to="/user" className="nav-link">Create Users</Link>
        </li>
        </ul>
        </div>
        </nav>
    )
  }
}
