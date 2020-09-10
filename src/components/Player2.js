import React, { useState, useEffect } from "react";
import {url as testUrl} from '../services/testUrl'
import { Consumer } from "../context";

const useAudio = (onPlay, url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if(!playing){
      await onPlay()
    }
    setPlaying(!playing);
  }

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );
 

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const PlayerView = ({ onPlay, audioUrl }) => {
  // const url = audioUrl || testUrl
   const url = audioUrl
  const [playing, toggle] = useAudio(onPlay, url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

const Player2 = () => (
  <Consumer>
    {context => (
      <PlayerView
        onPlay={context.onPlay}
        audioUrl={context.audioUrl}
      />
    )}
  </Consumer>
);


export default Player2;