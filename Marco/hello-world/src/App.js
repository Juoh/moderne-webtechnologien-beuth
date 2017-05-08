import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {helloWorldState: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      helloWorldState: !prevState.helloWorldState
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 ref="heading" className="display-text">{this.state.helloWorldState ? 'Hello World' : 'Hello Berlin'}</h2>
        </div>
        <p className="App-intro">
          <Button clickHandler={this.handleClick} ref="button" class="my-button"></Button>
        </p>
      </div>
    );
  }
}

export default App;
