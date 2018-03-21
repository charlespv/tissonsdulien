import React, { Component } from 'react'
import { Navbar, HeaderApp } from '../Components/index.js'
import * as g from '../Styles/global.js'
import * as s from '../Styles/home-styles.js'

class Home extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <HeaderApp/>
        </div>
    );
  }
}

export default Home;
