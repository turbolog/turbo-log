import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import Forum from "./components/forum/Forum";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import SingleCarGarage from "./components/garage/SingleCarGarage";
import MultiCarGarage from "./components/garage/MultiCarGarage";
import Account from "./components/account/Account";

export default (
  <Switch>
    <Route path="/garage/multi" component={MultiCarGarage} />
    <Route path="/garage/single" component={SingleCarGarage} />
    <Route path="/account" component={Account} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/forum" component={Forum} />
    <Route exact path="/" component={Home} />
  </Switch>
);
