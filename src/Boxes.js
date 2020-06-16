import React, {Component} from "react";
import Box from "./Box";
import './Boxes.css';

class Boxes extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      allColors: ["pink","hotpink", "deeppink", "palevioletred", "mediumvioletred","purple","plum"],
      numBoxes: 16
    };
  }
  render() {
    const boxes = Array.from({ length: this.state.numBoxes }).map(() => (
      <Box colors={this.state.allColors} />  // mapping over an array of colours and passing colours down via colors prop which will be received by the box
    ));
    return (
      <React.Fragment>
        <h2 style={{textAlign:"center"}}> Colour Pallette</h2>
          <div className='Boxes'>
            {boxes}
          </div>
      </React.Fragment>

    );
  }
};

export default Boxes;

Boxes.defaultProps = {
  allColors: ["papayawhip","pink",
    "hotpink", "deeppink", "palevioletred",
    "mediumvioletred","purple","plum","moccasin","peachpuff",
    "#1e001e","#320032","#a700a7","#e200e2","#6c006c"],
  numBoxes: 16
};

/// MAP OEVR AND FOR EACH BOX PUT A NEW CLASS NAME COLOR PROP

