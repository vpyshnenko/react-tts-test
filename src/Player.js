import React from "react";
import { Box, IconButton, Text } from 'gestalt';

export default function Player() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <Box display="inlineBlock">
        <IconButton
          bgColor='red'
          accessibilityControls="accordion-panel"
          accessibilityExpanded={isOpen}
          accessibilityLabel={isOpen ? 'See less': 'See more'}
          icon={isOpen ? 'play' : 'pause'}
          iconColor="white"
          onClick={() => setOpen(!isOpen)}
        />
      </Box>
      {isOpen && (
        <Box
          aria-label={isOpen ? 'See less': 'See more'}
          id="accordion-panel"
          padding={2}
          role="region"
        >
          <Text>I am an accordion panel.</Text>
        </Box>
      )}
    </>
  );
}