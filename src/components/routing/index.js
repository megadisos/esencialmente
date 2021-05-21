import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link,Switch,Redirect, } from "react-router-dom"
import Home from './../contexts/home'
import Servicios from './../contexts/servicios'
import Quienes from './../contexts/acerca'
import Contacto from './../contexts/contacto'
function Routing(props){
    return(
        <Router>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/:id/:name" component={Servicios}></Route>
            <Route path="/acerca" component={Quienes}></Route>
            <Route path="/contacto" component={Contacto}></Route>
        </Switch>
    </Router>
    )
}
export default Routing;