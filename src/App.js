import React from "react";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
