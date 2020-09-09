import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "gestalt";
import { Consumer } from "../context";
/*
const PlayerView = (props) => {
  const [isOpen, setOpen] = React.useState(false);
  const audioEl = useRef(null);
console.log('propps', props)
  useEffect(() => {audioEl.current && audioEl.current.play()}, [props.audioContent]);
  return (
    <>
    {props.audioContent && <audio ref={audioEl} src={'data:audio/wav;base64,' + props.audioContent}></audio>}
    <IconButton
      bgColor="red"
      iconColor="white"
      accessibilityControls="accordion-panel"
      accessibilityExpanded={isOpen}
      accessibilityLabel={isOpen ? "See less" : "See more"}
      icon={isOpen ? "play" : "pause"}
      // onClick={() => setOpen(!isOpen)}
      onClick={() => props.getAudio()}
    />
    </>
  );
};
*/

const PlayerView = props => {
 
  const [playing, setPlaying] = useState(false);
  const audio = new Audio();
  useEffect(() => {
    if (props.audioContent) {

      audio.src = "data:audio/wav;base64," + props.audioContent;
      audio.play()
      // setPlaying(true)
    }
  }, [props.audioContent]);
  // useEffect(() => {
  //   console.log(playing)
  //     playing ? audio.play() : audio.pause();
  //   },
  //   [playing]
  // );
  //  useEffect(() => {
  //   audio.addEventListener('ended', () => setPlaying(false));
  //   return () => {
  //     audio.removeEventListener('ended', () => setPlaying(false));
  //   };
  // }, []);

  return (
    <>
      <IconButton
        bgColor="red"
        iconColor="white"
        accessibilityLabel={playing ? "Pause" : "Play"}
        icon={playing ? "pause" : "play"}
        // onClick={() => setOpen(!isOpen)}
        onClick={async() => {
          if(!playing){
            await props.getAudio()
            // setPlaying(true)
            // audio.play()

          } else {
            setPlaying(false)
            audio.pause()
          }
          
        }}
      />
    </>
  );
};

/*

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

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

const PlayerView = ({ getAudio, audioContent }) => {
  const url = 'data:audio/wav;base64,' + audioContent
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

*/

const Player = () => (
  <Consumer>
    {context => (
      <PlayerView
        getAudio={context.getAudio}
        audioContent={context.audioContent}
      />
    )}
  </Consumer>
);

export default Player;
