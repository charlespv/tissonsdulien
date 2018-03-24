import React, { Component } from 'react'
import { Navbar, HeaderApp } from '../Components/index.js'
import glyphs from '../Assets/glyphs/index'
import * as consts from '../Styles/constants.js'
import * as g from '../Styles/global.js'
import * as s from '../Styles/home-styles.js'

class Home extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <HeaderApp/>
            <s.section bgc={'#fff'}>
              <s.sectionCtnr>
                <s.sectionTitle>Un voisin sélectionné et impliqué.</s.sectionTitle>
                <s.sectionTxt>Mettre en relation un voisin et un proche implique une sélection drastique des personnes aidantes. Leur référencement n’est possible qu’après la fourniture de justificatifs et d’entretiens de motivation. En cas de doute, le voisin n’est pas référencé.</s.sectionTxt>
                <s.sectionGlyphCtnr>
                  <s.sectionGlyph>
                    <s.glyphImg src={glyphs.glyph_1}/>
                    <s.glyphTitle>100% confiance</s.glyphTitle>
                    <s.glyphTxt>Un  profil vérifié et validé par nos soins</s.glyphTxt>
                  </s.sectionGlyph>
                  <s.sectionGlyph>
                    <s.glyphImg src={glyphs.glyph_2}/>
                    <s.glyphTitle>Toujours rassurés</s.glyphTitle>
                    <s.glyphTxt>Un voisin tisseur évalué par les proches des personnes aidées.</s.glyphTxt>
                  </s.sectionGlyph>
                  <s.sectionGlyph>
                    <s.glyphImg src={glyphs.glyph_3}/>
                    <s.glyphTitle>Toujours informés</s.glyphTitle>
                    <s.glyphTxt>Un compte-rendu envoyé après chaque visite.</s.glyphTxt>
                  </s.sectionGlyph>
                  <s.sectionGlyph>
                    <s.glyphImg src={glyphs.glyph_4}/>
                    <s.glyphTitle>100% sécurisé</s.glyphTitle>
                    <s.glyphTxt>Une messagerie privée et un système de paiement sécurisé.</s.glyphTxt>
                  </s.sectionGlyph>
                </s.sectionGlyphCtnr>
              </s.sectionCtnr>
            </s.section>
            <s.section bgc={consts.colorBlue}>
              <s.sectionCtnr>
              
              </s.sectionCtnr>
            </s.section>
            <s.section bgc={'#fff'}>
              <s.sectionCtnr>
              
              </s.sectionCtnr>
            </s.section>
            <s.footer>
              <s.sectionCtnr>
              
              </s.sectionCtnr>
            </s.footer>
        </div>
    );
  }
}

export default Home;
