import React from "react";
import { Box, Icon, Text } from "gestalt";

const More = () => (
  <Box  display="flex" marginRight={1} alignItems="center">
    <Box marginRight={2}>
    <Text>More</Text>
    </Box>
    <Box marginTop={1}>
    <Icon
      size={12}
      icon="arrow-down"
      accessibilityLabel="Menu"
      color="darkGray"
    />
    </Box>
  </Box>
);

export default More;
