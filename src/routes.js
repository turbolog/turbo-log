import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import Forum from "./components/forum/Forum";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import SingleCarGarage from "./components/garage/SingleCarGarage";
import MultiCarGarage from "./components/garage/MultiCarGarage";
import Account from "./components/account/Account";
import NearMe from "./components/near-me/Near-me"

export default (
  <Switch>
    <Route path="/garage/:vehicle_id" component={SingleCarGarage} />
    <Route path="/garage/" component={MultiCarGarage} />
    <Route path="/near-me" component={NearMe} />
    <Route path="/account" component={Account} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/forum" component={Forum} />
    <Route exact path="/" component={Home} />
  </Switch>
);
