import React, { Component } from 'react';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { getJobs } from '../actions/jobActions';
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
    return (

      <div>
      <p> Job List </p>
      <Button color="dark"
      onClick={() => {
        const name = prompt('Enter Job');
        if(name) {
          this.setState(state => ({
            jobs: [...state.jobs, {id: uuidv4(), name}]
          }));
        }
      }}
      >Add Job</Button>
      <ListGroup>
        <TransitionGroup className="job-list">
        {jobs.map(({ id, name }) => (
          <CSSTransition key={id} timeout={500} classNames="fade">
            <ListGroupItem>
            <Button className="remove-btn" color="danger" size="sm" onClick={() => {
              this.setState(state => ({
                jobs: state.jobs.filter(job => job.id !== id)
              }));
            }}
            >
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
    job: PropTypes.object.isRequired //Mapping redux from properties
  }

  const mapStateToProps = (state: JJobReduxProps) => ({
    jobs: state.job
    // isAuthenticated: state.auth.isAuthenticated
  });

  export default connect(mapStateToProps, { getJobs })(JobList);
