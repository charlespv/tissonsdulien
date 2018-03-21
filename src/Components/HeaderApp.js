import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import * as g from '../Styles/global.js'
import * as btn from '../Styles/buttons.js'
import * as s from '../Styles/headerapp-styles.js'
import logo from '../Assets/logo.png'

class HeaderApp extends Component {
  render() {
    return (
        <s.headerAppRoot></s.headerAppRoot>
    );
  }
}

export default HeaderApp;
