import React from "react";
import { Button, Input } from "@material-ui/core";

import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import { useMetronome } from "react-metronome-hook";

import hi from "../assets/hi.wav";
import lo from "../assets/lo.wav";

function Metronome() {
  const { startMetronome, isTicking, stopMetronome, setBpm } = useMetronome(
    40,
    4,
    [hi, lo]
  );

  return (
    <div className="Metronome">
      <Button
        variant="outlined"
        style={{ margin: "0 20px 0 0" }}
        onClick={isTicking ? stopMetronome : startMetronome}
      >
        <PlayArrowIcon />
        <PauseIcon />
      </Button>
      <Input
        inputProps={{
          step: 1,
          min: 40,
          max: 218,
          placeholder: 40,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
        onChange={(e) => setBpm(e.target.value)}
        style={{ width: "50px" }}
      />
    </div>
  );
}

export default Metronome;
