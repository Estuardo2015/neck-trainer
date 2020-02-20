import React from 'react';
import {Circle, Line, Text} from 'react-konva';

export const scales = [
	"Major",
	"Minor"
];

export const chords = {
	"Major" : "M",
	"Minor": "m",
	"7th" : "7",
	"Major 7th" : "maj7",
	"Minor 7th" : "m7",
	"Diminished" : "dim",
	"Minor 7th b5" : "m7b5",
	"Major 6th" : "6",
	"Minor 6th" : "m6",
	"9th" : "9",
	"Major 9th" : "maj9",
	"Minor 9th" : "m9",
	"Sus 4" : "sus4",
	"Sus 2" : "sus2"
}

export const notes = [
	"A",
	"A#",
	"B",
	"C",
	"C#",
	"D",
	"D#",
	"E",
	"F",
	"F#",
	"G",
	"G#"
]

export const stringNotes = [
	["E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], "A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E"],
	["B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], "A", ["A#", "Bb"], "B"],
	["G", ["G#", "Ab"], "A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G"],
	["D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], "A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D"],
	["A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], "A"],
	["E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], "A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E"]
]

/*
	Function for the fretboard to draw notes
*/

export function drawNote(x, y, fill) {
	return (
		<Circle
			x={x}
			y={y} 
			radius={14} 
			fill={fill}
			stroke={"#102027"}
			strokeWidth={1.5}
		/>
	)
}
  
export function drawLabel(x, y, text) {
	// Some notes like G# take up to much space in the note, so we will calculate how much we should move each note over
	var x_offset;
	if(text.length === 1) {
		x_offset=5.5;
	} else {
		x_offset=9.5
	}

	return (<Text
		x={x-x_offset}
		y={y-7}
		text={text}
		fontSize={17} 
		fontFamily="Roboto"
		fill={"#eeeeee"}
		align="center"
		/>
	)
}

/*

Everything below draws out the bare fretboard and returns 3 objects
Strings
Frets
Fretmarkers

*/

export const strings = []
export const fretPos = []

// First draw the 6 strings
var string_y=20;
for(var i=0; i<=5; i++) {
	strings.push(<Line
	points={[0, string_y, 800, string_y]}
	closed
	stroke="silver"
	strokeWidth={1}
	/>)
	string_y=string_y+35;
}
// Then draw the frets
var fretLine=109;
for(var j=0; j<=10; j++) {
	fretPos.push(
	<Line
		points={[fretLine, 20, fretLine, 195]}
		closed
		stroke="silver"
		strokeWidth={1}
	/>
	)
	fretLine = fretLine+59;
}

export const fretMarkers = [
	<Circle
	x={197}
	y={225} 
	radius={3} 
	fill="#eeeeee" 
	stroke="1b1b1b" 
	strokeWidth={1}
	/>,
	<Circle
	x={315}
	y={225} 
	radius={3} 
	fill="#eeeeee" 
	stroke="1b1b1b" 
	strokeWidth={1}
	/>,
	<Circle
	x={433}
	y={225} 
	radius={3} 
	fill="#eeeeee" 
	stroke="1b1b1b" 
	strokeWidth={1}
	/>,
	<Circle
	x={551}
	y={225} 
	radius={3} 
	fill="#eeeeee" 
	stroke="1b1b1b" 
	strokeWidth={1}
	/>,
	<Circle
	x={722}
	y={225} 
	radius={3} 
	fill="#1b1b1b" 
	stroke="1b1b1b" 
	strokeWidth={1}
	/>,
	<Circle
	x={734}
	y={225} 
	radius={3} 
	fill="#1b1b1b" 
	stroke="1b1b1b" 
	strokeWidth={1}
	/>,
	<Line
	points={[50, 0, 50, 215]}
	closed
	stroke="silver"
	strokeWidth={2}
	/>
];