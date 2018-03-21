import React from 'react'
import { Home } from '../Containers/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { isLogedIn } from '../utils/authUtils'

function Routes() {
    return (
        <Router>
            <Route path="/" component={Home}/>
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
