import React, { Component } from 'react'
import * as s from '../Styles/home-styles'
import { Link } from 'react-router-dom'
import glyphs from '../Assets/glyphs/index'

export default class Footer extends Component {
    render() {
        return (
            <s.footer>
                <s.sectionCtnr>
                <s.footerCtnr>
                    <s.footerColumn>
                    <s.footerTitle>Tissons du lien sur votre mobile</s.footerTitle>
                    <s.footerStores>
                        <Link to={'https://play.google.com/'} target={'_blank'}>
                        <s.footerStoreImg src={glyphs.store_google}/>
                        </Link>
                        <Link to={'https://itunes.apple.com/fr/'} target={'_blank'}>
                        <s.footerStoreImg src={glyphs.store_apple}/>
                        </Link>
                    </s.footerStores>
                    <s.footerTitle>Suivez nous</s.footerTitle>
                    </s.footerColumn>
                    <s.footerColumn>
                    <s.footerTitle>
                        <Link to={'/about'}>Qui sommes nous ?</Link>
                    </s.footerTitle>
                    <s.footerTitle>
                        <Link to={'/about'}>Mentions légales ?</Link>
                    </s.footerTitle>
                    <s.footerTitle>
                        <Link to={'/about'}>CGV CGU ?</Link>
                    </s.footerTitle>
                    </s.footerColumn>
                    <s.footerColumn>
                    <s.footerTitle>Questions fréquentes :</s.footerTitle>
                    <s.footerSubTitle>
                        <Link to={'/faq'}>Quand vais-je être payé ?</Link>
                    </s.footerSubTitle>
                    <s.footerSubTitle>
                        <Link to={'/faq'}>Qu’est-ce qu’un voisin de 1ère ?</Link>
                    </s.footerSubTitle>
                    <s.footerSubTitle>
                        <Link to={'/faq'}>Comment fonctionne le paiement en ligne ?</Link>
                    </s.footerSubTitle>
                    <s.footerSubTitle>
                        <Link to={'/faq'}>Dois-je avancer de l’argent pour faire les courses ?</Link>
                    </s.footerSubTitle>
                    </s.footerColumn>
                </s.footerCtnr>
                </s.sectionCtnr>
            </s.footer>
        )
    }
}
