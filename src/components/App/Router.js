import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Signup from '../Clients/Signup'
import Signin from '../Clients/Signin'

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/signin" exact component={Signin} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
