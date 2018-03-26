import React, { Component } from 'react'
import { MapConsumer } from '../Stores/MapStore.js'
import { HeaderAppLanding, HeaderAppMap, HeaderAppMenu } from './index'
import {headerAppStyles as h} from '../Styles/headerapp-styles.js'

export default class HeaderApp extends Component {
  render() {
    return (
      <h.root>
        <MapConsumer>  
          {({state, actions}) => (
            <React.Fragment>
              {(state.showMap) ? <HeaderAppMap state={state} actions={actions}/> : <HeaderAppLanding />}
              <HeaderAppMenu state={state} actions={actions}/>
            </React.Fragment>
          )}
        </MapConsumer>
      </h.root>
    )
  }
}