import React, { Component }  from 'react';
import './../styles/Button.css'
import { withRouter } from 'react-router-dom';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {    
    let { history } = this.props;
    history.push({pathname: this.props.to});    
  }
  render() {
    return (
      <button className="button" onClick={this.handleClick}>{this.props.title}</button>
    );
  }
};

export default withRouter(Button);