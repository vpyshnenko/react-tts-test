import React from "react";
import { Box, TextArea } from "gestalt";
import { Consumer } from "../context";

const EditorView = ({text, setText}) => {
  const [value, setValue] = React.useState("");
  return (
    <TextArea
      id="editor"
      onChange={({ value }) => setText(value)}
      placeholder="Write here something about yourself..."
      value={text}
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
