import React, { Component }  from 'react';
import './../styles/Button.css'

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.customOnButtonClick();
  }
  render() {
    return (
      <button className="button" onClick={this.handleClick}>{this.props.title}</button>
    );
  }
};

export default Button;