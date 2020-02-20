import React from 'react';
import {Button, Grid, Divider} from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Knob, Pointer, Value } from 'rc-knob';
import { useMetronome } from 'react-metronome-hook';
import styles from './modules/knob.module.css';

import hi from './assets/hi.wav';
import lo from './assets/lo.wav';

function Metronome() { 
  const {
    startMetronome,
    isTicking,
    stopMetronome,
    setBpm,
  } = useMetronome(40, 4, [hi, lo]);

  return (
    <div className="Metronome">
      <Grid container direction={'column'}>
        <Knob 
          size={150}  
          angleOffset={220} 
          angleRange={280}
          min={40}
          max={218}
          steps={1}
          onChange={value => setBpm(Math.round(value))}
        >
          <Pointer 
            width={3}
            radius={50}
            type="circle"
            color="#880e4f"
          />
          <circle
            r="45"
            cx="75"
            cy="75"
            fill="#560027"
          />
          <Value 
            marginBottom={65} 
            className={styles.value} 
          />
        </Knob>

        <Divider style={{marginBottom: 30}}/>

        <Button variant="outlined" onClick={isTicking ? stopMetronome : startMetronome}><PlayArrowIcon/><PauseIcon/></Button>
      </Grid>
    </div>
  ); 
}

export default Metronome;