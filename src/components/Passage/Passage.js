import React, { Component } from "react";
import { serverCommunication } from '../../serverCommunication.js';
import Button from '../Button/Button';
import './Passage.scss';

class Welcome extends Component {
  constructor(props){
    super();
  }

  componentWillMount() {
    if (!localStorage.memberId) {
      this.props.history.push('/');
    }

    this.getActiveSessions();
  }

  getActiveSessions() {
    serverCommunication.getActiveSessions()
    .then((response) => {
      if (response.length < 0) {
        // No active
      } else {
        // Show list of active
      }
    }, (error) => {
      console.log("Passage, getActiveSessions(), error: " + error);
    });

  }

  createSession() {
    serverCommunication.createSession(localStorage.memberId)
    .then((response) => {
      console.log("Created session")
      // Move to lobby
    }, (error) => {
      console.log("Passage, createSession(), error: " + error);
    });
  }

  addMemberToSession() {

  }

  render(){
    return(
      <div id="passageContainer">

        <div id="passageTextContainer">
          <p>Det verkar inte finnas någon öppen provning ännu. Vill du skapa en?</p>
        </div>

        <div id="buttonContainer">
          <Button handleClick={() => this.createSession()} buttonLabel="SKAPA"/>
        </div>

      </div>
    )
  }
}

export default Welcome;
