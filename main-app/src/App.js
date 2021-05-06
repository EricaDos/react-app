
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import JobList from "./components/jobs-list.component";
// import EditJob from "./components/edit-job.component";
// import UploadImage from "./components/upload-images.component";
// import CreateUser from "./components/create-user.component";


function App() {
    return (

      <Router>
        <div className="container">
        <Navbar />
        <br />
        <JobList />

        </div>
      </Router>

  );
}

export default App;
