import React from "react";
import "../styles.css";

import Header from "./Header";
import CardDay from "./CardDay";

function App() {
  return (
    <div>
      <Header />
      <CardDay day="Monday" />
      <CardDay day="Tuesday" />
      <CardDay day="Wednesday" />
      <CardDay day="Thursday" />
      <CardDay day="Friday" />
    </div>
  );
}

export default App;
