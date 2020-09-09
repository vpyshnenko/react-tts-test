import React from "react";
import { Box, IconButton } from "gestalt";
import {Consumer} from '../context'

const PlayerView = ({getAudio}) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <IconButton
      bgColor="red"
      iconColor="white"
      accessibilityControls="accordion-panel"
      accessibilityExpanded={isOpen}
      accessibilityLabel={isOpen ? "See less" : "See more"}
      icon={isOpen ? "play" : "pause"}
      // onClick={() => setOpen(!isOpen)}
      onClick={() => getAudio()}
    />
  );
};

const Player = () => (
    <Consumer>
        {context => (
          <PlayerView getAudio={context.getAudio} />

        )}
    </Consumer>
);

export default Player;
