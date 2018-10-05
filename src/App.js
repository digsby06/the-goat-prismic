import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Views */
import Home from "views/Home";
import Artist from "views/Artist";
import PageNotFound from "views/PageNotFound";

/** Styles */
import 'styles/main.scss';

const App = () => (
  <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/artist/:id" component={Artist} />
          <Route component={PageNotFound} />
      </Switch>
  </Router>
);

export default App;
