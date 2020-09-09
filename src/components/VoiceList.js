import React, {useEffect, useState} from "react";
import { SelectList } from "gestalt";
import { Consumer } from "../context";
import {getVoices} from "../services"

const VoiceListView = ({voiceName, setVoiceName}) => {
  const [options, setOptions] = React.useState([])
    useEffect(async () => {
      const voiceNames = await getVoices()
      setOptions(voiceNames.map(item => ({label: item, value: item})))

    },
    []
  );
  
  return (
    <SelectList
      id="voiceSelector"
      onChange={({ value }) => setVoiceName(value)}
      options={options}
      placeholder="Select voice"
      value={voiceName}
    />
  );
};

const VoiceList = () => (
  <Consumer>
    {context => (
      <VoiceListView
        voiceName={context.voiceName}
        setVoiceName={context.setVoiceName}
      />
    )}
  </Consumer>
);

export default VoiceList;
