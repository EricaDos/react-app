//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import UploadImage from "./components/upload-images.component";
import CreateUser from "./components/create-user.component";


function App() {
    return (

      <Router>
      <div className="App">

      </div>
      <Navbar />
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/upload" exact component={UploadImage} />
      <Route path="/user" exact component={CreateUser} />


       </Router>

  );
}

export default App;
