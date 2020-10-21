import React from "react";
import "./App.css";
import Dashboard, { ExtraUserDetails } from "./components/Dashboard";

function App(): JSX.Element {

  const propsObject: ExtraUserDetails = {
    userName: "Sunny",
    userId: 123,
    activeStatus: true,
  };

  return (
    <div className="App">
      <Dashboard {...propsObject} />
    </div>
  );
}

export default App;
