import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // state for text
    this.state = {isHelloState: true};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // method for change the state
  handleClick() {
    this.setState(prevState => ({
      isHelloState: !prevState.isHelloState
    }));
  }

  render() {
    return (
      <div className="App">
        <p ref="text" id="hello_world">{this.state.isHelloState ? 'Hello World' : 'Hello Berlin'}</p>
        <button ref="button" onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default App;
