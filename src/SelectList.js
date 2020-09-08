import React from "react";
import { SelectList } from 'gestalt';

export default function Select(props) {
  const [city, setCity] = React.useState('la')
  const cityOptions = [
    {
      value: "bos",
      label: "Boston"
    },
    {
      value: "la",
      label: "Los Angeles"
    },
    {
      value: "sf",
      label: "San Francisco"
    }
  ];
  return (
    <SelectList
      id="city"
      name="city"
      onChange={({ value }) => setCity(value)}
      options={cityOptions}
      placeholder="Select city"
      value={city}
    />
  );
}