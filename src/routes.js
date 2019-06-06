import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import Forum from "./components/forum/Forum";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import SingleCarGarage from "./components/garage/SingleCarGarage";
import MultiCarGarage from "./components/garage/MultiCarGarage";
import Account from "./components/account/Account";
import ServiceForm from "./components/serviceForm/ServiceForm";
import NearMe from "./components/near-me/Near-me";
import GettingLocation from "./components/getting-location/GettingLocation";
import AddVehicle from "./components/garage/AddVehicle";
import BestPractices from "./components/bestPractices/BestPractices";

export default (
  <Switch>
    <Route path="/bestpractices" component={BestPractices} />
    <Route path="/addvehicle" component={AddVehicle} />
    <Route path="/addrecord/:vehicle_id" component={ServiceForm} />
    {/* <Route path="/addRecordForm" component={ServiceForm} /> */}
    <Route path="/garage/:vehicle_id" component={SingleCarGarage} />
    <Route path="/garage/" component={MultiCarGarage} />
    <Route path="/near-me/:city/:state" component={NearMe} />
    <Route path="/near-me" component={GettingLocation} />
    <Route path="/account" component={Account} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/forum" component={Forum} />
    <Route exact path="/" component={Home} />
  </Switch>
);
