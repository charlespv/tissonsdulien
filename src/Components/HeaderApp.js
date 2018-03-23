import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HeaderAppLanding, HeaderAppMap, HeaderAppMenu } from './index'
import * as g from '../Styles/global.js'
import * as btn from '../Styles/buttons.js'
import {headerAppStyles as h, menuStyles as m} from '../Styles/headerapp-styles.js'
import logo from '../Assets/logo.png'

class HeaderApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMap: false
    }
  }

  toggleMap() {
    this.setState({showMap: !this.state.showMap})
  }

  render() {
    return (
        <h.root>
          {(this.state.showMap) ? <HeaderAppMap/> : <HeaderAppLanding/>}
          <HeaderAppMenu toggleMap={() => this.toggleMap()}/>
        </h.root>
    );
  }
}

export default HeaderApp;
