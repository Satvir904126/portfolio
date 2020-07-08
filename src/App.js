import React from "react";
import Portfolio from "./portfolio";
// import "App.css";
import { DataProvider } from "./components/context";
function App() {
  return (
    <DataProvider>
      <div className="App">
        <Portfolio></Portfolio>
      </div>
    </DataProvider>
  );
}

export default App;
