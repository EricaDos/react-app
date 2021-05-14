import React, { Component } from 'react';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { getJobs, deleteJob } from '../actions/jobActions';
import PropTypes from 'prop-types';

//Links to different postRoutes
import { Link } from 'react-router-dom';



class JobList extends Component {

//Lifecycle methods - Calling an actions
  componentDidMount() {
    this.props.getJobs();
    

  }


  render(){
 //state_object.array
    const { jobs } = this.props.jobs; //Destructoring

    console.log(jobs)

    return (

      <div>
      <p> Job List </p>

      <ListGroup>
        <TransitionGroup className="job-list">
        {jobs.map(({ _id, name }) => (
          <CSSTransition key={_id} timeout={500} classNames="fade">
            <ListGroupItem>
            <Button className="remove-btn" color="danger" size="sm" onClick={() => {}} >
            &times;
            </Button>
              {name}
            </ListGroupItem>
            </CSSTransition>
        ))}
        </TransitionGroup>
      </ListGroup>
      </div>
    );
    }
  }

//Actions are stored as a prop
  JobList.propTypes = {
    getJobs: PropTypes.func.isRequired,
    job: PropTypes.object.isRequired, //Mapping redux from properties
    deleteJob: PropTypes.object.isRequired
  }

  const mapStateToProps = (state: JJobReduxProps) => ({
    jobs: state.job
    // isAuthenticated: state.auth.isAuthenticated
  });

  export default connect(mapStateToProps, { getJobs })(JobList);
