import React, { Component } from "react";
import { choice } from "./helpers";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:  choice(this.props.colors) // this is the colour that will be chosen at random,  this.props.colors, colors is an array that is expected to be passed in from above
    };
    this.handleClick = this.handleClick.bind(this); // binding the onClick function so we know it is referring to this Box class
  }

  handleClick() {
    let newColor; // create a starting point
    do {
      newColor = choice(this.props.colors); // do this this.props.colors, colors is an array that is expected to be passed in from above
    } while (newColor === this.state.color);// while new color is the same as the current colour- this is to avoid getting the same colour one after other
    this.setState({
      color: newColor
    }); // set the new state to the new colour chosen.
  }


  render() {
    return (
      <div
        className='Box'
        style={{ backgroundColor: this.state.color }} // an array of colours which comes from the state. One colour is chosen at random in the state "choice"
        onClick={this.handleClick}
      />
    );
  }
}

export default Box;
