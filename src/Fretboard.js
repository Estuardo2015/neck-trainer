import React from 'react';
import {Stage, Layer, Text, Circle, Line } from 'react-konva';
import {Grid} from '@material-ui/core';

import {strings, fretPos, fretMarkers} from './assets/notes.js';
import DrawScales from './modules/DrawScales';
import DrawArpeggios from './modules/DrawArpeggios'

class Fretboard extends React.Component {
  render() {
    let fretboard = null;

    switch(this.props.option) {
      case 1: fretboard = <DrawScales chord={this.props.chord} note={this.props.note} checked={this.props.checked}/>; break;
      case 2: fretboard = <DrawArpeggios chord={this.props.chord} note={this.props.note} checked={this.props.checked}/>; break;
      case 3: break;
      default: break;
    }

    return (
      <div className="Fretboard">
        <Grid container justify={'center'}>
          <Grid item>
            <Stage width={750} height={240}>
              <Layer>
                {strings}
                {fretPos}
                {fretMarkers}
                {fretboard}
              </Layer>
            </Stage>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Fretboard;