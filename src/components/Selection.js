import React from "react";
import { Select, Typography, Switch } from "@material-ui/core";

import Metronome from "./Metronome";

class Selection extends React.Component {
  render() {
    return (
      <div
        className="Selection row"
        style={{
          display: "flex",
          background: "#e0e0e0",
          borderRadius: "3px",
          padding: "10px",
        }}
      >
        <div className="col" style={{ flex: "50%", display: "block" }}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ flex: "50%", display: "block" }}>
              <Typography variant="subtitle1" style={{ margin: "3px" }}>
                Root
              </Typography>
              <Typography variant="subtitle1" style={{ margin: "3px" }}>
                Structure
              </Typography>
            </div>
            <div style={{ flex: "50%", display: "block", textAlign: "left" }}>
              <Select
                native
                onChange={(e) => this.props.handleRootChange(e, "root")}
                value={this.props.root}
              >
                <option value="Ab">♭A</option>
                <option value="A">A</option>
                <option value="A#">A♯</option>
                <option value="Bb">♭B</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="C#">C♯</option>
                <option value="Db">♭D</option>
                <option value="D">D</option>
                <option value="D#">D♯</option>
                <option value="Eb">♭E</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="F#">F♯</option>
                <option value="Gb">♭G</option>
                <option value="G">G</option>
                <option value="G#">G♯</option>
              </Select>

              <Select
                native
                value={this.props.chord}
                onChange={(e) => this.props.handleChange(e, "chord")}
              >
                <optgroup label="Scales">
                  <option value="1Major">Major</option>
                  <option value="1Minor">Minor</option>
                  <option value="1major pentatonic">Major Pentatonic</option>
                  <option value="1minor pentatonic">Minor Pentatonic</option>
                  <option value="1minor blues">Minor Blues</option>
                </optgroup>
                <optgroup label="Modal">
                  <option value="1dorian">Dorian</option>
                  <option value="1mixolydian">Mixolydian</option>
                  <option value="1lydian">Lydian</option>
                  <option value="1phrygian">Phrygian</option>
                  <option value="1locrian">Locrian</option>
                </optgroup>
                <optgroup label="Arpeggios">
                  <option value="2M">Major</option>
                  <option value="2m">Minor</option>
                  <option value="27">7th</option>
                  <option value="2maj7">Major 7th</option>
                  <option value="2m7">Minor 7th</option>
                  <option value="2dim">Diminished</option>
                  <option value="2m7b5">Minor 7th ♭5</option>
                  <option value="26">Major 6th</option>
                  <option value="2m6">Minor 6th</option>
                  <option value="29">9th</option>
                  <option value="2maj9">Major 9th</option>
                  <option value="2m9">Minor 9th</option>
                  <option value="2sus2">Sus 2</option>
                  <option value="2sus4">Sus 4</option>
                </optgroup>
              </Select>
            </div>
          </div>
        </div>
        <div className="col" style={{ flex: "50%" }}>
          <Metronome />
        </div>
      </div>
    );
  }
}

export default Selection;

/* 
<Typography variant="subtitle1" style={{ margin: "3px" }}>
                Interval
              </Typography>

<Switch
	checked={this.props.interval}
	onChange={(e) => this.props.handleCheck(e, "interval")}
/>
*/
