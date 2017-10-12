import React, {Component} from "react";

class Button extends Component {

  click() {
  	console.log('clicky click');
  }	

  render() {
    return (
      <div onClick={this.click}>I'm a button</div>
    );
  }
};

module.exports = Button;