import styled, { css } from 'styled-components';
import * as consts from './constants.js'

const section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    ${props => props.bgc && css`
        background-color: ${props.bgc}
    `}
`

const footer = styled.section`
    width: 100%;
    padding: 50px 0;
    background-color: ${consts.colorGray}
`

const sectionTitle = styled.h2`
    font-family: 'Fredoka One', cursive;
    color: ${consts.colorBlue};
    font-size: 40px;
    font-weight: 300;
    margin: 0 0 40px 0;
`

const sectionTxt = styled.p`
    color: ${consts.colorGray};
    font-size: 18px;
    font-weight: 400;
    margin: 0 auto;
    max-width: 850px;
`

const sectionCtnr = styled.div`
    max-width: ${consts.containerWidth};
    margin: 0 auto;
    text-align: center;
`

const sectionGlyphCtnr = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${consts.containerWidth};
    margin-top: 50px;
`

const sectionGlyph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 250px;
`

const glyphImg = styled.img`
    width: 80px;
    height: auto;
`

const glyphTitle = styled.h3`
    color: ${consts.colorGray};
    font-size: 24px;
    margin: 20px 0;
`

const glyphTxt = styled.p`
    color: ${consts.colorGray};
    font-size: 16px;
    margin: 0;
`

export {
    section,
    footer,
    sectionTitle,
    sectionTxt,
    sectionCtnr,
    sectionGlyphCtnr,
    sectionGlyph,
    glyphImg,
    glyphTitle,
    glyphTxt
}