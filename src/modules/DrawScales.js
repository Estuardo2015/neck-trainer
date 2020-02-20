import React, { Fragment } from 'react';
import { Note, Scale, } from "tonal";
import {stringNotes, drawNote, drawLabel} from '../assets/notes.js';

class DrawScales extends React.Component {

  render() {
		// Build out our major or minor scale, excluding the root, because we will draw that later
		const scale = Scale.notes(this.props.note + " " + this.props.chord.toLowerCase());
    const intervals = Scale.intervals(this.props.note + " " + this.props.chord.toLowerCase());
    const root = scale.shift();
		for(var i=0; i<=5; i++) { scale[i] = Note.simplify(scale[i]) }; // Simplifying the scale turns shit like C## into D. Much easier to deal with.
		console.log(intervals);

    const notes = []
    const labels = []
    var string_y=20;

    // Loop through the stringNotes array to find notes that belong to our scale!
    for(var i=0; i<=5; i++) {
      // For each string we draw 13 notes
      var circle_x=20;
      for(var j=0; j<=12; j++) {
        if (Array.isArray(stringNotes[i][j])) {
          if(stringNotes[i][j][0] === root) {notes.push(drawNote(circle_x, string_y, "#b71c1c")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][0]));}
          else if(stringNotes[i][j][1] === root) {notes.push(drawNote(circle_x, string_y, "#b71c1c")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][1]));}
          else if(scale.includes(stringNotes[i][j][0])) {notes.push(drawNote(circle_x, string_y, "#102027")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][0]));}
          else if(scale.includes(stringNotes[i][j][1])) {notes.push(drawNote(circle_x, string_y, "#102027")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][1]));}
        } else {
          if(stringNotes[i][j] === root) {notes.push(drawNote(circle_x, string_y, "#b71c1c")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j]));}
          else if(scale.includes(stringNotes[i][j])) {notes.push(drawNote(circle_x, string_y, "#102027")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j]));}
        }
        circle_x=circle_x+59;
      }
      string_y=string_y+35;
    }

    return (
      <Fragment>
        {notes}
        {labels}
      </Fragment>
    );
  }
}

export default DrawScales;