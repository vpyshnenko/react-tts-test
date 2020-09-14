import React from "react";
import { SelectList } from "gestalt";
import { Consumer } from "../context";

const SpeedListView = ({speakingRate, setSpeakingRate}) => {
  
  const options = [
    {
      value: "0.25",
      label: "Speed 1"
    },
    {
      value: "0.5",
      label: "Speed 2"
    },
    {
      value: "0.8",
      label: "My favorite"
    },
    {
      value: "1",
      label: "Speed 3"
    },
    {
      value: "2",
      label: "Speed 4"
    },
    {
      value: "3",
      label: "Speed 5"
    }
  ];
  return (
    <SelectList
      id="speedSelector"
      onChange={({ value }) => setSpeakingRate(Number(value))}
      options={options}
      placeholder="Select speed"
      value={String(speakingRate)}
    />
  );
};

const SpeedList = () => (
  <Consumer>
    {context => (
      <SpeedListView
        speakingRate={context.speakingRate}
        setSpeakingRate={context.setSpeakingRate}
      />
    )}
  </Consumer>
);

export default SpeedList;
