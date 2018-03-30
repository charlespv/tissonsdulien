import React from 'react'
import { Home, Login, Register, Profile, About } from '../Containers'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function Routes() {
    return (
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/about" component={About}/>
                <Route path="/profile/:id" component={Profile}/>
            </React.Fragment>
        </Router>
    )
}

export default Routes
