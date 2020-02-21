import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import {AppBar, Typography, Toolbar, Grid, Paper} from '@material-ui/core';

import Selection from "./Selection";
import Metronome from "./Metronome";
import Fretboard from "./Fretboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 1,
			chord: "",
      note: "C",
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(event, id) {
		this.setState({[id]: event.target.value}, () => {
			//console.log(this.state);
		});
  }
  
  handleCheck(event, id) {
		this.setState({[id]: event.target.checked}, () => {
			//console.log(this.state);
		});
	}

  render() {
    const option = this.state.option;
    const chord = this.state.chord;
    const note = this.state.note;
    const checked = this.state.checked;

    return (
      <div className="App">
        <AppBar title="My App" position="static" style={{ background: '#102027'}}>
          <Toolbar>
            <Typography variant="h6">
              Fret Trainer
            </Typography>
            <MusicNoteIcon fontSize="large"/>
          </Toolbar>
        </AppBar>
  
        <Grid container
          direction={'row'} 
          justify={'center'}
          spacing={5}  
          style={{ background: '#e0e0e0', width: '100vw', height: '100vh', padding: 40}}
        >
          <Grid item sm={8}>
            <Grid container spacing={5} direction={'column'}>
              <Grid item>
                <Paper style={{padding: 20, background: '#f5f5f5'}} elevation={3} square><Selection option={option} chord={chord} note={note} checked={checked} handleChange={this.handleChange} handleCheck={this.handleCheck}/></Paper>
              </Grid>
              <Grid item>
                <Paper style={{padding: 20, background: '#f5f5f5'}} elevation={3} square><Fretboard option={option} chord={chord} note={note} checked={checked}/></Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Paper style={{padding: 20, background: '#f5f5f5'}} elevation={3} square><Metronome/></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
  
}

export default App;
