import React, { Component } from 'react'
import { UserConsumer } from '../Stores/UserStore'
import { Navbar, Footer } from '../Components'
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
          <s.title>S'inscrire</s.title>
          <s.inputGroup>
            <s.label>*Nom:</s.label>
            <s.input type={'text'} placeholder={'Dupont'}></s.input>
          </s.inputGroup>
          <s.inputGroup>
            <s.label>*Prénom:</s.label>
            <s.input type={'text'} placeholder={'François'}></s.input>
          </s.inputGroup>
          <s.inputGroup>
            <s.label>*Mot de passe</s.label>
            <s.input type={'password'} placeholder={'Minimum 8 caractères'}></s.input>
          </s.inputGroup>
          <s.inputGroup>
            <s.label>*Numéro de téléphone:</s.label>
            <s.input type={'text'} placeholder={'06.01.23.45.67'}></s.input>
          </s.inputGroup>
          <s.inputGroup>
            <s.label>*Date de naissance</s.label>
            <s.input type={'date'} />
          </s.inputGroup>
          <s.inputGroup>
            <s.label>*Sexe</s.label>
            <s.select value={-1}>
              <option value={-1} disabled hidden>Selectionner</option>
              <option value={1}>Homme</option>
              <option value={2}>Femme</option>
              <option value={3}>Autre</option>
            </s.select>
          </s.inputGroup>
          <btn.roundedBlue style={{marginTop: '30px'}}>S'inscrire</btn.roundedBlue>
        </s.root>
        <Footer/>
      </React.Fragment>
    )
  }
}