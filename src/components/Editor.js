import React from "react";
import { Box, TextArea } from "gestalt";
import { Consumer } from "../context";

const EditorView = () => {
  const [value, setValue] = React.useState("");
  return (
    <TextArea
      id="editor"
      onChange={({ value }) => setValue(value)}
      placeholder="Write here something about yourself..."
      value={value}
    />
  );
};



const Editor = () => (
  <Consumer>
    {context => (
      <EditorView
        text={context.text}
        setText={context.setText}
      />
    )}
  </Consumer>
);

export default Editor;
