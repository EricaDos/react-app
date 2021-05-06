import React, { Component } from 'react';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
//Links to different postRoutes
import { Link } from 'react-router-dom';

export default class JobList extends Component {
  state = {
    jobs: [
      { id: uuidv4(), name: 'One-Off Cleaning'},
      { id: uuidv4(), name: 'Weekly Cleaning'},
      { id: uuidv4(), name: 'Deep Cleaning'},
      { id: uuidv4(), name: 'Bi-Weekly Cleaning'}
    ]
  }

  render(){
    const { jobs } = this.state;
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
