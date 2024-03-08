import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { useState, useEffect } from "react";
function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
