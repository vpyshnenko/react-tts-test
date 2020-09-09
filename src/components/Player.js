import React from "react";
import { Box, IconButton } from "gestalt";

const Player = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <IconButton
      bgColor="red"
      iconColor="white"
      accessibilityControls="accordion-panel"
      accessibilityExpanded={isOpen}
      accessibilityLabel={isOpen ? "See less" : "See more"}
      icon={isOpen ? "play" : "pause"}
      onClick={() => setOpen(!isOpen)}
    />
  );
};

export default Player;
