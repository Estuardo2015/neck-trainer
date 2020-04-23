import React, { Fragment } from "react";
import { Circle, Line, Text, Layer } from "react-konva";
import { Note, Scale, Chord } from "tonal";
import { dc } from "./ColorLib";

export var note_map = {
  Ab: "♭A",
  A: "A",
  "A#": "A♯",
  Bb: "♭B",
  B: "B",
  C: "C",
  "C#": "C♯",
  Db: "♭D",
  D: "D",
  "D#": "D♯",
  Eb: "♭E",
  E: "E",
  F: "F",
  "F#": "F♯",
  Gb: "♭G",
  G: "G",
  "G#": "G♯",
};

export const stringNotes = [
  [
    "E",
    "F",
    ["F#", "Gb"],
    "G",
    ["G#", "Ab"],
    "A",
    ["A#", "Bb"],
    "B",
    "C",
    ["C#", "Db"],
    "D",
    ["D#", "Eb"],
    "E",
  ],
  [
    "B",
    "C",
    ["C#", "Db"],
    "D",
    ["D#", "Eb"],
    "E",
    "F",
    ["F#", "Gb"],
    "G",
    ["G#", "Ab"],
    "A",
    ["A#", "Bb"],
    "B",
  ],
  [
    "G",
    ["G#", "Ab"],
    "A",
    ["A#", "Bb"],
    "B",
    "C",
    ["C#", "Db"],
    "D",
    ["D#", "Eb"],
    "E",
    "F",
    ["F#", "Gb"],
    "G",
  ],
  [
    "D",
    ["D#", "Eb"],
    "E",
    "F",
    ["F#", "Gb"],
    "G",
    ["G#", "Ab"],
    "A",
    ["A#", "Bb"],
    "B",
    "C",
    ["C#", "Db"],
    "D",
  ],
  [
    "A",
    ["A#", "Bb"],
    "B",
    "C",
    ["C#", "Db"],
    "D",
    ["D#", "Eb"],
    "E",
    "F",
    ["F#", "Gb"],
    "G",
    ["G#", "Ab"],
    "A",
  ],
  [
    "E",
    "F",
    ["F#", "Gb"],
    "G",
    ["G#", "Ab"],
    "A",
    ["A#", "Bb"],
    "B",
    "C",
    ["C#", "Db"],
    "D",
    ["D#", "Eb"],
    "E",
  ],
];

/*
StringNotes

[
	["E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], "A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E"],
	["B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], "A", ["A#", "Bb"], "B"],
	["G", ["G#", "Ab"], "A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G"],
	["D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], "A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D"],
	["A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], "A"],
	["E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], "A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E"]
]
*/

/*
	Function for the fretboard to draw notes
*/

export function drawNote(x, y, fill) {
  return (
    <Circle
      x={x}
      y={y}
      radius={15}
      fill={fill}
      stroke={"#263238"}
      strokeWidth={1}
    />
  );
}

export function drawLabel(x, y, text, color) {
  // Some notes like G# take up to much space in the note, so we will calculate how much we should move each note over
  var x_offset;
  if (text.length === 1) {
    x_offset = 5.5;
  } else {
    x_offset = 9.5;
  }

  return (
    <Text
      x={x - x_offset}
      y={y - 7}
      text={text}
      fontSize={17}
      fontFamily="Roboto"
      fill={color}
      align="center"
    />
  );
}

/*******************************
 *Draw the specified structure
 *******************************/

export class DrawScales extends React.Component {
  render() {
    // Build out our major or minor scale, excluding the root, because we will draw that later
    const scale = Scale.notes(
      this.props.root + " " + this.props.chord.substr(1).toLowerCase()
    );
    const intervals = Scale.intervals(
      this.props.root + " " + this.props.chord.substr(1).toLowerCase()
    );
    const root = scale.shift();
    for (var i = 0; i <= 5; i++) {
      scale[i] = Note.simplify(scale[i]);
    } // Simplifying the scale turns notes like C## into D. Much easier to deal with.
    console.log(scale);

    const notes = [];
    const labels = [];
    var string_y = 20;

    // Loop through the stringNotes array to find notes that belong to our scale!
    for (var i = 0; i <= 5; i++) {
      // For each string we draw 13 notes
      var circle_x = 20;
      for (var j = 0; j <= 12; j++) {
        if (Array.isArray(stringNotes[i][j])) {
          for (var k = 0; k < 2; k++) {
            if (stringNotes[i][j][k] === root) {
              notes.push(drawNote(circle_x, string_y, dc["root"]));
              labels.push(
                drawLabel(
                  circle_x,
                  string_y,
                  note_map[stringNotes[i][j][k]],
                  dc["label"]
                )
              );
            } else if (scale.includes(stringNotes[i][j][k])) {
              notes.push(drawNote(circle_x, string_y, dc["scale"]));
              labels.push(
                drawLabel(
                  circle_x,
                  string_y,
                  note_map[stringNotes[i][j][k]],
                  dc["label"]
                )
              );
            }
          }
        } else {
          if (stringNotes[i][j] === root) {
            notes.push(drawNote(circle_x, string_y, dc["root"]));
            labels.push(
              drawLabel(circle_x, string_y, stringNotes[i][j], dc["label"])
            );
          } else if (scale.includes(stringNotes[i][j])) {
            notes.push(drawNote(circle_x, string_y, dc["scale"]));
            labels.push(
              drawLabel(circle_x, string_y, stringNotes[i][j], dc["label"])
            );
          }
        }
        circle_x = circle_x + 59;
      }
      string_y = string_y + 35;
    }

    return (
      <Fragment>
        {notes}
        {labels}
      </Fragment>
    );
  }
}

export class DrawArpeggios extends React.Component {
  render() {
    // Build out our chord, excluding the root, because we will draw that later
    const chord = Chord.notes(this.props.root + this.props.chord.substr(1));
    for (var i = 0; i <= chord.length - 1; i++) {
      chord[i] = Note.simplify(chord[i]);
    }

    const intervals = Chord.intervals(
      this.props.root + " " + this.props.chord.substr(1).toLowerCase()
    );

    const root = chord[0];
    const third = chord[1];
    const fifth = chord[2];
    var seventh = null;
    var extension = null;
    if (chord.length === 4) {
      seventh = chord[3];
    }
    if (chord.length === 5) {
      seventh = chord[3];
      extension = chord[4];
    }
    //console.log(intervals);

    const notes = [];
    const labels = [];
    var string_y = 20;

    // Loop through the stringNotes array to find notes that belong to our scale!
    for (var i = 0; i <= 5; i++) {
      // For each string we draw 13 notes
      var circle_x = 20;
      for (var j = 0; j <= 12; j++) {
        if (Array.isArray(stringNotes[i][j])) {
          for (var k = 0; k < 2; k++) {
            if (stringNotes[i][j][k] === root) {
              notes.push(drawNote(circle_x, string_y, dc["root"]));
              labels.push(
                drawLabel(
                  circle_x,
                  string_y,
                  note_map[stringNotes[i][j][k]],
                  dc["label"]
                )
              );
            } else if (stringNotes[i][j][k] === third) {
              notes.push(drawNote(circle_x, string_y, dc["third"]));
              labels.push(
                drawLabel(
                  circle_x,
                  string_y,
                  note_map[stringNotes[i][j][k]],
                  dc["label"]
                )
              );
            } else if (stringNotes[i][j][k] === fifth) {
              notes.push(drawNote(circle_x, string_y, dc["fifth"]));
              labels.push(
                drawLabel(
                  circle_x,
                  string_y,
                  note_map[stringNotes[i][j][k]],
                  dc["label"]
                )
              );
            } else if (stringNotes[i][j][k] === seventh) {
              notes.push(drawNote(circle_x, string_y, dc["seventh"]));
              labels.push(
                drawLabel(
                  circle_x,
                  string_y,
                  note_map[stringNotes[i][j][k]],
                  dc["label"]
                )
              );
            } else if (stringNotes[i][j][k] === extension) {
              notes.push(drawNote(circle_x, string_y, dc["extension"]));
              labels.push(
                drawLabel(
                  circle_x,
                  string_y,
                  note_map[stringNotes[i][j][k]],
                  dc["label"]
                )
              );
            }
          }
        } else {
          if (stringNotes[i][j] === root) {
            notes.push(drawNote(circle_x, string_y, dc["root"]));
            labels.push(
              drawLabel(circle_x, string_y, stringNotes[i][j], dc["label"])
            );
          } else if (stringNotes[i][j] === third) {
            notes.push(drawNote(circle_x, string_y, dc["third"]));
            labels.push(
              drawLabel(circle_x, string_y, stringNotes[i][j], dc["label"])
            );
          } else if (stringNotes[i][j] === fifth) {
            notes.push(drawNote(circle_x, string_y, dc["fifth"]));
            labels.push(
              drawLabel(circle_x, string_y, stringNotes[i][j], dc["label"])
            );
          } else if (stringNotes[i][j] === seventh) {
            notes.push(drawNote(circle_x, string_y, dc["seventh"]));
            labels.push(
              drawLabel(circle_x, string_y, stringNotes[i][j], dc["label"])
            );
          } else if (stringNotes[i][j] === extension) {
            notes.push(drawNote(circle_x, string_y, dc["extension"]));
            labels.push(
              drawLabel(circle_x, string_y, stringNotes[i][j], dc["label"])
            );
          }
        }
        circle_x = circle_x + 59;
      }
      string_y = string_y + 35;
    }

    return (
      <Fragment>
        {notes}
        {labels}
      </Fragment>
    );
  }
}

/*******************************
 *Draw the bare Fretboard
 *******************************/

export default function DrawFretboard(props) {
  const neck = [];

  // First draw the 6 strings
  var string_y = 20;
  for (var i = 0; i <= 5; i++) {
    neck.push(
      <Line
        points={[0, string_y, 800, string_y]}
        closed
        stroke="white"
        strokeWidth={1.5}
      />
    );
    string_y = string_y + 35;
  }

  // Then draw the frets
  var fretLine = 109;
  for (var j = 0; j <= 10; j++) {
    neck.push(
      <Line
        points={[fretLine, 20, fretLine, 195]}
        closed
        stroke="white"
        strokeWidth={1.5}
      />
    );
    fretLine = fretLine + 59;
  }

  // Then draw the nut
  neck.push(
    <Line points={[50, 0, 50, 215]} closed stroke="white" strokeWidth={2} />
  );

  const fretMarkers = [
    <Circle
      x={197}
      y={225}
      radius={3}
      fill="#eeeeee"
      stroke="1b1b1b"
      strokeWidth={0.5}
    />,
    <Circle
      x={315}
      y={225}
      radius={3}
      fill="#eeeeee"
      stroke="1b1b1b"
      strokeWidth={0.5}
    />,
    <Circle
      x={433}
      y={225}
      radius={3}
      fill="#eeeeee"
      stroke="1b1b1b"
      strokeWidth={0.5}
    />,
    <Circle x={551} y={225} radius={3} fill="#eeeeee" />,
    <Circle x={722} y={225} radius={3} fill="#eeeeee" />,
    <Circle x={734} y={225} radius={3} fill="#eeeeee" />,
  ];

  var structure;

  //console.log(props);

  if (props.option == 1) {
    structure = (
      <DrawScales
        option={props.option}
        chord={props.chord}
        root={props.root}
        interval={props.interval}
      />
    );
  } else {
    structure = (
      <DrawArpeggios
        option={props.option}
        chord={props.chord}
        root={props.root}
        interval={props.interval}
      />
    );
  }

  return (
    <Layer>
      {neck}
      {fretMarkers}
      {structure}
    </Layer>
  );
}
