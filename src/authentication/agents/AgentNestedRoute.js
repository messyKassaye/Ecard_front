import React from 'react'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import AgentsHome from './AgentsHome';

class AgentsNestedRoute extends React.Component{

    render(){
        return <Switch>
        <Route path='/auth' component={AgentsHome} exact/>
   </Switch>

    }
}

export default AgentsNestedRoute