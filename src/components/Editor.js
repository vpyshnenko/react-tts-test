import React from "react";
import { Box, TextArea } from "gestalt";

const Editor = () => {
  const [value, setValue] = React.useState("");
  return (
    <TextArea
      onChange={({ value }) => setValue(value)}
      placeholder="Write here something about yourself..."
      value={value}
    />
  );
};

export default Editor;
