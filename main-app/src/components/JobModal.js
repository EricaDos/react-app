import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addJob } from '../actions/jobActions';
import { JJobReduxProps, JJobModal, ITarget } from '../components';


class JobModal extends Component{
  state = {
    modal: false,
    name: ''
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value}); //refers to value of name below and getting it from target
  };

  onSubmit = e => {
    e.preventDefault();

    const newJob = {

      name: this.state.name
    };

    this.props.addJob(newJob); // Adding job via AddJob action

    //Close Modal
    this.toggle();
    }

  render(){
    return (
      <div>

        <Modal isOpen={this} toggle={handleToggle}>
          <ModalHeader toggle={handleToggle}>Add To Job List</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleOnSubmit}>
              <FormGroup>
                <Label for="job">Job</Label>
                <Input
                  type="text"
                  name="name"
                  id="job"
                  placeholder="Add Job"
                  onChange={handleChangeName}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} onClick={this.toggle}>
                  Add Job


                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  };

}




const mapStateToProps = (state: JJobReduxProps) => ({
  job: state.job,
  // isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addJob })(JobModal);
