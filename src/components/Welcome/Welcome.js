import React, { Component } from "react";
import { serverCommunication } from '../../serverCommunication.js';
import Button from '../Button/Button';
import './Welcome.scss';

class Welcome extends Component {
  constructor(props){
    super();
  }

  signUp() {
    const username = this.refs.username.value;
    serverCommunication.createMember(username)
    .then((response) => {
      localStorage.memberId = response._id;
      this.props.history.push('/passage');
    }, (error) => {
      console.log("Welcome, signUp(), error: " + error);
    });
  }

  render(){
    return(
      <div id="welcomeContainer">

        <div id="welcomeTextContainer">
          <p>Välkommen till årets julmustprovning! Vänligen skriv in ditt namn för att starta provningen.</p>
        </div>

        <div className="fieldContainer">
          <input ref="username" type="text" placeholder="" defaultValue={localStorage.signUpUsername} />
        </div>

        <div id="buttonContainer">
          <Button handleClick={() => this.signUp()} buttonLabel="FORTSÄTT"/>
        </div>

      </div>
    )
  }
}

export default Welcome;
