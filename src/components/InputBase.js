import React, { Component }  from 'react';
import './../styles/InputBase.css'

class InputBase extends Component {
  render() {
    return (
        <div>
      <p>{this.props.Name}</p>
      <input className="input"></input>
      </div>
    );
  }
};

export default InputBase;