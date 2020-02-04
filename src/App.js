import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import {AppBar, Typography, Toolbar} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <AppBar title="My App" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6">
            Fret Trainer
          </Typography>
          <MusicNoteIcon fontSize="large"></MusicNoteIcon>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
