import React from "react";
import "./style.css";
import data from "./data";
import "./components/Header";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const cards = data.map((item) => {
    return <Card item={item} />;
  });

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
