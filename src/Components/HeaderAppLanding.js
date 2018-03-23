import React, { Component } from 'react'
import { lstyles as s } from '../Styles/headerapp-styles'

export default class HeaderAppLanding extends Component {
  render() {
    return (
      <s.landing>
        <s.landingContainer>
          <s.title>Plus que de simples voisins,</s.title>
          <s.title>devenez tisseurs de liens</s.title>
          <s.separator></s.separator>
          <s.content>Pour donner du sens et rechercher plus qu’un complément de revenus.</s.content>
          <s.content>Pour rompre la solitude d’un parent âgé, lui procurer du temps partagé.</s.content>
        </s.landingContainer>
      </s.landing>
    )
  }
}