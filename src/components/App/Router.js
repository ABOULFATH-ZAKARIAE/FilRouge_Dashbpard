import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../Auth/privateRoute'


import DashboardOwner from '../Owner/dashboard'
import AddProduct from '../Owner/ProductAdd'

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/dashboard/owner" exact component={DashboardOwner} />
            <Route path="/dashboard/addProduct" exact component={AddProduct} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
