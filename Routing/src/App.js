import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

function App() {
  return (
    <Router>
      <Switch>
        {/* Default Page */}
        <Route exact path="/" component={About} />
        {/* Contact Page on the given path */}
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
