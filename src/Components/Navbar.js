import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import * as btn from '../Styles/buttons.js'
import * as s from '../Styles/navbar-styles.js'
import logo from '../Assets/logo.png'

class Home extends Component {
  render() {
    return (
        <s.NavbarRoot>
            <s.NavbarContainer>
                <React.Fragment>
                    <Link to={'/'}>
                        <s.NavbarLogo src={logo}/>
                    </Link>
                </React.Fragment>
                <s.NavbarLinks>
                    <NavLink to={'/about'}>Nos valeurs</NavLink>
                    <NavLink to={'/'}>Aide</NavLink>
                    <NavLink to={'/login'}>
                        <btn.roundedTransparent>Se connecter</btn.roundedTransparent>
                    </NavLink>
                    <NavLink to={'/register'}>
                        <btn.roundedTransparent>S'inscrire</btn.roundedTransparent>
                    </NavLink>
                </s.NavbarLinks>
            </s.NavbarContainer>
        </s.NavbarRoot>
    );
  }
}

export default Home;
