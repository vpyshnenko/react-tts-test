import React from "react";
import {Provider} from "./context";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Provider>
      <Layout />
    </Provider>
  );
}
