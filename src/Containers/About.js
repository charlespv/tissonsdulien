import React, { Component } from 'react'
import { Navbar, Footer } from '../Components'
import * as s from '../Styles/about-styles'

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <s.root>
            <s.title>Nos valeurs</s.title>
            <s.text>L’homme est bon ! Nous y croyons. Aider une personne autour de soi se fait naturellement et... trop ponctuellement, au grand damne de nos ainés et des personnes âgées. Car nos emplois du temps (sur)chargés par nos mille vies, sont autant de freins à notre spontanéité.</s.text>
            <s.text>La contractualisation d’un service (les courses pour manger), autour d’un temps partagé (le repas pour se poser) rend possible la récurrence et la qualité de ce moment. Les personnes isolées retrouvent un contact hors de la sphère sanitaire, sociale ou médicale et redeviennent des personnes à part entière, le temps d’un déjeuner. Un moment simple de la vie, qui procure une joie diffuse, un véritable lien intergénérationnel. Les âgés sont heureux, leurs enfants aussi. Et nous le sommes également.</s.text>
            <s.text>Pas de culpabilité à avoir. Vous vous êtes fait aider et l’expérience est gagnant/gagnant. Continuez à tisser du lien, c’est votre entourage que vous valorisez. Merci.</s.text>
        </s.root>
        <Footer/>
      </React.Fragment>
    )
  }
}
