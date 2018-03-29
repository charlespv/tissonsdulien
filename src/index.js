import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/index'
import { UserProvider } from './Stores/UserStore'
import { MapProvider } from './Stores/MapStore'
import './Styles/global'

ReactDOM.render(
    <UserProvider>
        <MapProvider>
            <Routes />
        </MapProvider>
    </UserProvider>,
    document.getElementById('root')
);
