import React, { Component } from 'react'
import { UserConsumer } from '../Stores/UserStore'
import { Navbar, Footer } from '../Components/index.js'
import logoImg from '../Assets/logo.png'
import * as s from '../Styles/logreg-styles'
import * as btn from '../Styles/buttons'

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <s.logoCtnr>
          <s.logo src={logoImg}/>
        </s.logoCtnr>
        <s.root>
          <s.title>Se connecter</s.title>
          <s.inputGroup>
            <s.label>Email:</s.label>
            <s.input type={'text'} placeholder={'Dupont'}></s.input>
          </s.inputGroup>
          <s.inputGroup>
            <s.label>*Mot de passe</s.label>
            <s.input type={'password'} placeholder={'Minimum 8 caractères'}></s.input>
          </s.inputGroup>
          <btn.roundedBlue style={{marginTop: '30px'}}>Se connecter</btn.roundedBlue>
        </s.root>
        <Footer/>
      </React.Fragment>
    )
  }
}
