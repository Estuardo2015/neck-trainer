import React, { Fragment } from 'react';
import { Note, Chord } from "tonal";
import {chords, stringNotes, drawNote, drawLabel} from '../assets/notes.js';

class DrawArpeggios extends React.Component {
  render() {
		// Build out our chord, excluding the root, because we will draw that later
		const chord = Chord.notes(this.props.note + chords[this.props.chord]);
		for(var i=0; i<=chord.length-1; i++) {chord[i] = Note.simplify(chord[i])}

		const root = chord[0];
		const third = chord[1];
		const fifth = chord[2];
		var seventh = null;
	  var extension = null;
		if(chord.length === 4) { seventh = chord[3]; console.log("yes! 9th");}
		if(chord.length === 5) { seventh = chord[3]; console.log("yes! 9th"); extension = chord[4]; console.log("yes! extension"); }
		console.log(this.props.chord , chord);

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
					else if(stringNotes[i][j][0] === third) {notes.push(drawNote(circle_x, string_y, "#0d47a1")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][0]));}
					else if(stringNotes[i][j][1] === third) {notes.push(drawNote(circle_x, string_y, "#0d47a1")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][1]));}
					else if(stringNotes[i][j][0] === fifth) {notes.push(drawNote(circle_x, string_y, "#1b5e20")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][0]));}
					else if(stringNotes[i][j][1] === fifth) {notes.push(drawNote(circle_x, string_y, "#1b5e20")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][1]));}
					else if(stringNotes[i][j][0] === seventh) {notes.push(drawNote(circle_x, string_y, "#f9a825")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][0]));}
					else if(stringNotes[i][j][1] === seventh) {notes.push(drawNote(circle_x, string_y, "#f9a825")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][1]));}
					else if(stringNotes[i][j][0] === extension) {notes.push(drawNote(circle_x, string_y, "#ff80ab")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][0]));}
					else if(stringNotes[i][j][1] === extension) {notes.push(drawNote(circle_x, string_y, "#ff80ab")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][1]));}
        } else {
					if(stringNotes[i][j] === root) {notes.push(drawNote(circle_x, string_y, "#b71c1c")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j]));}
					else if(stringNotes[i][j] === third) {notes.push(drawNote(circle_x, string_y, "#0d47a1")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j]));}
					else if(stringNotes[i][j] === fifth) {notes.push(drawNote(circle_x, string_y, "#1b5e20")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j]));}
					else if(stringNotes[i][j] === seventh) {notes.push(drawNote(circle_x, string_y, "#f9a825")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j]));}
					else if(stringNotes[i][j] === extension) {notes.push(drawNote(circle_x, string_y, "#ff80ab")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j]));}
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

export default DrawArpeggios;

/*
 if (Array.isArray(stringNotes[i][j])) {
  if(stringNotes[i][j][0] === root) {notes.push(drawNote(circle_x, string_y, "#b71c1c")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][0]));}
	else if(stringNotes[i][j][1] === root) {notes.push(drawNote(circle_x, string_y, "#b71c1c")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][1]));}
	else if(scale.includes(stringNotes[i][j][0])) {notes.push(drawNote(circle_x, string_y, "#102027")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][0]));}
	else if(scale.includes(stringNotes[i][j][1])) {notes.push(drawNote(circle_x, string_y, "#102027")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j][1]));}
} else {
	if(stringNotes[i][j] === root) {notes.push(drawNote(circle_x, string_y, "#b71c1c")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j]));}
	else if(scale.includes(stringNotes[i][j])) {notes.push(drawNote(circle_x, string_y, "#102027")); labels.push(drawLabel(circle_x, string_y, stringNotes[i][j]));}
}
*/