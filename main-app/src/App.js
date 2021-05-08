
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar.component";
import JobList from "./components/jobs-list.component";
// import EditJob from "./components/edit-job.component";
// import UploadImage from "./components/upload-images.component";
// import CreateUser from "./components/create-user.component";
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
      <Provider store={store}>

      <Router>
        <div className="container">
        <Navbar />
        <br />
        <JobList />

        </div>

      </Router>
      </Provider>
  );
}

export default App;
