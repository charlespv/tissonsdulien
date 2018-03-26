import React from 'react'
import { Home, Login, Register } from '../Containers/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function Routes() {
    return (
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </React.Fragment>
        </Router>
    )
    // return (
    //     <Router>
    //         {(isLogedIn()) ?
    //             <div>
    //                 <Route exact path="/" component={HomeContainer} />
    //                 <Route exact path="/settings" component={SettingsContainer} />
    //             </div>
    //         :
    //             <div>
    //                 <Route exact path="/" component={LoginContainer} />
    //                 <Route exact path="/register" component={RegisterContainer} />
    //             </div>
    //         }
    //     </Router>
    // )
}

export default Routes
