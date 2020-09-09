import React from "react";
import { SelectList } from 'gestalt';

export default function Select(props) {
  const [val, setVal] = React.useState('1')
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
      onChange={({ value }) => setVal(value)}
      options={options}
      placeholder="Select speed"
      value={val}
    />
  );
}