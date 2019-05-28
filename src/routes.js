import {Switch, Route} from "react-router-dom"
import React from "react"
import Home from "./components/home/Home"
import Forum from "./components/forum/Forum"


export default (  
    

    <Switch>
        
        
        <Route path="/forum" component={Forum}/>
        <Route path="/" component={Home}/>

        


    </Switch>
    
)