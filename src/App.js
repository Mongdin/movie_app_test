import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <span>
      <HashRouter>
        <Navigation></Navigation>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/movie/:id" component={Detail}></Route>
      </HashRouter>
    </span>
  );
}

export default App;
