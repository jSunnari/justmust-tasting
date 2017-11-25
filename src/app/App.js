import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Logo from '../components/Logo/Logo';
import Welcome from '../components/Welcome/Welcome';
import Passage from '../components/Passage/Passage';
import './App.scss';

class App extends Component {
  render() {
    let headerLabel = "Julmustprovning"
    return (
      <BrowserRouter>
        <div id="app">
          <Logo className="logo" headerLabel={headerLabel}/>
          <Route exact path="/" component={Welcome} />
          <Route path="/passage" component={Passage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
