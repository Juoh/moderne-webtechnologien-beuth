import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.clickHandler} ref="button">Klick mich</button>
    );
  }
}

export default Button;
