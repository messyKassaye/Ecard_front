import React from 'react'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import AdminHome from '../admin/components/AdminHome'
import CardRequestCheckout from '../commons/CardRequestCheckout';

class AdminNestedRoute extends React.Component{

    render(){

       return <Switch>
                <Route path='/auth' component={AdminHome} exact/>
                <Route path='/auth/commons/card_request_checkout' component={CardRequestCheckout}/>
        </Switch>
    }
}

export default AdminNestedRoute;