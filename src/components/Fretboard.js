import React from "react";
import { Stage } from "react-konva";

import DrawFretboard from "../lib/FretLib";

class Fretboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 750, height: 750 / 3.125 }; // height = width/ratio
  }

  render() {
    return (
      <div className="Fretboard">
        <Stage width={this.state.width} height={this.state.height}>
          <DrawFretboard
            option={this.props.option}
            chord={this.props.chord}
            root={this.props.root}
            interval={this.props.interval}
          />
        </Stage>
      </div>
    );
  }
}

export default Fretboard;
