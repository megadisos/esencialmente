import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link,Switch,Redirect, } from "react-router-dom"
import Home from './../contexts/home'
import Servicios from './../contexts/servicios'
function Routing(props){
    return(
        <Router>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/servicio"><Servicios /></Route>
        </Switch>
    </Router>
    )
}
export default Routing;