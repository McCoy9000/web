import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Works from "../components/sections/Works";
import Bio from "../components/sections/Bio";
import Blog from "../components/sections/Blog";
import Shop from "../components/sections/Shop";
import Contact from "../components/sections/Contact";
import Dossier from "../components/common/Dossier";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/works" />} />
        <Route path="/works" component={Works} />
        <Route path="/bio" component={Bio} />
        <Route path="/blog" component={Blog} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }
}
