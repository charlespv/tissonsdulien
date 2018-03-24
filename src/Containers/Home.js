import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, HeaderApp } from '../Components/index.js'
import glyphs from '../Assets/glyphs/index'
import testimonials from '../Assets/testimonials/index'
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
                <s.sectionGlyphCtnr nomargin>
                  <s.sectionGlyph>
                    <s.glyphTitle white>Étape 1</s.glyphTitle>
                    <s.glyphImg src={glyphs.glyph_5}/>
                    <s.glyphTitle white>Appel à voisin tisseur</s.glyphTitle>
                    <s.glyphTxt white>Saisissez le code postal de la ville de votre parent, puis sélectionner son quartier.</s.glyphTxt>
                  </s.sectionGlyph>
                  <s.glyphSeparator></s.glyphSeparator>
                  <s.sectionGlyph>
                    <s.glyphTitle white>Étape 2</s.glyphTitle>
                    <s.glyphImg src={glyphs.glyph_6}/>
                    <s.glyphTitle white>Voisins tisseurs à proximité</s.glyphTitle>
                    <s.glyphTxt white>Visualisez les fiches des voisins référencés et consulter les profils.</s.glyphTxt>
                  </s.sectionGlyph>
                  <s.glyphSeparator></s.glyphSeparator>
                  <s.sectionGlyph>
                    <s.glyphTitle white>Étape 3</s.glyphTitle>
                    <s.glyphImg src={glyphs.glyph_7}/>
                    <s.glyphTitle white>Choisissez votre tisseur de lien</s.glyphTitle>
                    <s.glyphTxt white>Echanger avec lui et si vous êtes décidé, validez et réglez directement la prestation.</s.glyphTxt>
                  </s.sectionGlyph>
                </s.sectionGlyphCtnr>
                <s.sectionGlyphCtnr>
                  <s.sectionGlyph>
                    <s.glyphTitle white>Étape 4</s.glyphTitle>
                    <s.glyphImg src={glyphs.glyph_5}/>
                    <s.glyphTitle white>Suivez la prestation</s.glyphTitle>
                    <s.glyphTxt white>Avec l’appli tissonsdulien, vous savez à tout instant où sont les intervenants.</s.glyphTxt>
                  </s.sectionGlyph>
                  <s.glyphSeparator></s.glyphSeparator>
                  <s.sectionGlyph>
                    <s.glyphTitle white>Étape 5</s.glyphTitle>
                    <s.glyphImg src={glyphs.glyph_6}/>
                    <s.glyphTitle white>Échanger et évaluer</s.glyphTitle>
                    <s.glyphTxt white>Après le repas, le tisseur vous fait un compte-rendu. Consulter votre parent et évaluer le tisseur.</s.glyphTxt>
                  </s.sectionGlyph>
                  <s.glyphSeparator></s.glyphSeparator>
                  <s.sectionGlyph>
                    <s.glyphTitle white>Étape 6</s.glyphTitle>
                    <s.glyphImg src={glyphs.glyph_7}/>
                    <s.glyphTitle white>Tout est OK</s.glyphTitle>
                    <s.glyphTxt white>Nous vérifions de notre côté si tout s’est bien déroulé. La somme est débloquée et virée au tisseur.</s.glyphTxt>
                  </s.sectionGlyph>
                </s.sectionGlyphCtnr>
                <s.sectionGlyphCtnr>
                  <s.sectionGlyph>
                  </s.sectionGlyph>
                  <s.sectionGlyph>
                    <s.glyphImg src={glyphs.glyph_11}/>
                    <s.glyphTitle white>On recommence ?</s.glyphTitle>
                    <s.glyphTxt white>Vous et votre parent êtes satisfaits. Vous pouvez planifier les prestations à venir depuis sur l’appli.</s.glyphTxt>
                  </s.sectionGlyph>
                  <s.sectionGlyph>
                  </s.sectionGlyph>
                </s.sectionGlyphCtnr>
            </s.section>
            <s.section bgc={'#fff'}>
              <s.sectionCtnr>
                <s.sectionTitle>Les tisseurs témoignent.</s.sectionTitle>
                <s.testimonialCtnr>
                  <s.testimonial>
                    <s.testimonialImg src={testimonials._1}/>
                    <s.testimonialTitle>Sylvie</s.testimonialTitle>
                    <s.testimonialTxt>Tissonsdulien m’a apporté une forme de sérénité. Et de la joie, à maman, comme avant.</s.testimonialTxt>
                  </s.testimonial>
                  <s.testimonial>
                    <s.testimonialImg src={testimonials._2}/>
                    <s.testimonialTitle>Sandra</s.testimonialTitle>
                    <s.testimonialTxt>Tissonsdulien m’a apporté une forme de sérénité. Et de la joie, à maman, comme avant.</s.testimonialTxt>
                  </s.testimonial>
                </s.testimonialCtnr>
                <s.testimonialCtnr>
                  <s.testimonial>
                    <s.testimonialImg src={testimonials._3}/>
                    <s.testimonialTitle>Pierre</s.testimonialTitle>
                    <s.testimonialTxt>Tissonsdulien m’a apporté une forme de sérénité. Et de la joie, à maman, comme avant.</s.testimonialTxt>
                  </s.testimonial>
                  <s.testimonial>
                    <s.testimonialImg src={testimonials._4}/>
                    <s.testimonialTitle>Marie</s.testimonialTitle>
                    <s.testimonialTxt>Tissonsdulien m’a apporté une forme de sérénité. Et de la joie, à maman, comme avant.</s.testimonialTxt>
                  </s.testimonial>
                </s.testimonialCtnr>
              </s.sectionCtnr>
            </s.section>
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
        </div>
    );
  }
}

export default Home;
