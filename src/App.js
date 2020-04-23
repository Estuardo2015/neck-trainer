import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

import Selection from "./components/Selection";
import Fretboard from "./components/Fretboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 1,
      chord: "1Major",
      root: "C",
      interval: false,
    };
    this.handleRootChange = this.handleRootChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(event, id) {
    var opt = event.target.value[0];
    var val = event.target.value.substr(1);

    this.setState({ chord: opt + val });
    this.setState({ option: opt }, () => {
      console.log(this.state);
    });
  }

  handleRootChange(event, id) {
    this.setState({ root: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleCheck(event, id) {
    // Handle interval change
    this.setState({ [id]: event.target.checked }, () => {
      //console.log(this.state);
    });
  }

  render() {
    const option = this.state.option;
    const chord = this.state.chord;
    const root = this.state.root;
    const interval = this.state.interval;

    return (
      <div className="App">
        <AppBar
          title="Fret Trainer"
          position="static"
          style={{ background: "#263238" }}
        >
          <Toolbar>
            <Typography variant="h6">Fret Trainer</Typography>
            <MusicNoteIcon fontSize="large" />
          </Toolbar>
        </AppBar>

        <div
          className="wrapper"
          style={{ width: "750px", margin: "0 auto", textAlign: "center" }}
        >
          <div
            className="fretboard"
            style={{
              margin: "45px 0",
              width: "750px",
            }}
          >
            <Fretboard
              option={option}
              chord={chord}
              root={root}
              interval={interval}
            />
          </div>
          <div
            className="menu"
            style={{ width: "500px", display: "inline-block" }}
          >
            <Selection
              option={option}
              chord={chord}
              root={root}
              interval={interval}
              handleChange={this.handleChange}
              handleRootChange={this.handleRootChange}
              handleCheck={this.handleCheck}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
