import React, { useState, useEffect } from "react";
import { IconButton } from "gestalt";
import { url as testUrl } from "../services/testUrl";
import { Consumer } from "../context";

const useAudio = (onPlay, url) => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
 
    if (!playing) {
      await onPlay();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);
  useEffect(() => {
    const audio = new Audio(url);

    audio.addEventListener("ended", () => {
      setPlaying(false);
      audio.currentTime = 0;
    });
    setAudio(audio);
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [url]);

  return [playing, toggle];
};

const PlayerView = ({ onPlay, audioUrl, disabled }) => {
   const [playing, toggle] = useAudio(onPlay, audioUrl);

  return (
    <>
      <IconButton
        bgColor="red"
        iconColor="white"
        disabled={disabled}
        accessibilityLabel={playing ? "Pause" : "Play"}
        icon={playing ? "pause" : "play"}
        // onClick={() => setOpen(!isOpen)}
        onClick={toggle}
        
      />
    </>
   
  );
};

const Player = () => (
  <Consumer>
    {context => (
      <PlayerView onPlay={context.onPlay} audioUrl={context.audioUrl} disabled={!context.text} />
    )}
  </Consumer>
);

export default Player;
