import React from 'react';
import {Typography, Grid, Select, MenuItem, Divider, Switch} from '@material-ui/core';
import {scales, chords, notes} from './assets/notes.js'
import { Note, Chord } from "tonal";

class Selection extends React.Component {
	render() {
		let selectedOption;
		let selectedNote;
		const chordInt = Chord.intervals(this.props.note + chords[this.props.chord]);

		// If chords or arpeggios are chosen, we show the full list,
		// otherwise, for scales we only show major and minor
		if(this.props.option === 2 || this.props.option === 3) {
			selectedOption = <Select style={{minWidth: 130}} onChange={(e) => this.props.handleChange(e, "chord")} value={this.props.chord}>
				{Object.entries(chords)
				.map(([key, value]) => <MenuItem value={key}>{key}</MenuItem>)
				}
			</Select>;
		} else if(this.props.option ===  1) {
			selectedOption = <Select style={{minWidth: 130}} onChange={(e) => this.props.handleChange(e, "chord")} value={this.props.chord}>
				{scales.map(key => (
					<MenuItem value={key}>{key}</MenuItem>
				))}
			</Select>;
		} else {
			selectedOption = <Select style={{minWidth: 130}}></Select>;
		}

		// Generate options for keys
		selectedNote = <Select style={{minWidth: 130}} onChange={(e) => this.props.handleChange(e, "note")} value={this.props.note}>
			{notes.map(key => (
				<MenuItem value={key}>{key}</MenuItem>
			))}
		</Select>;

		return (
			<div className="Selection">
				<Grid container justify={'center'} spacing={3}>
					<Grid item><Typography variant="h5">I want to practice...</Typography></Grid>
					<Grid item>
						<Grid container spacing={2} direction={'column'}>
							<Grid item>
								<Select id="option" style={{minWidth: 130}} onChange={(e) => this.props.handleChange(e, "option")} value={this.props.option}>
									<MenuItem value={1}>Scales</MenuItem>
									<MenuItem value={2}>Arpeggios</MenuItem>
								</Select>
							</Grid>
							<Grid item>
								{selectedOption}
							</Grid>
							<Grid item>
								{selectedNote}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Selection;