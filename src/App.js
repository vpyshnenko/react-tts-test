import React from "react";
import "./style.css";
import Select from './SelectList'
import PlayBtn from './PlayBtn'
import 'gestalt/dist/gestalt.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Select />
      <PlayBtn />
    </div>
  );
}

