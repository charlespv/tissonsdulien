import styled, { css } from 'styled-components';
import * as consts from './constants.js'
import glyphs from '../Assets/glyphs/index.js'

const section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
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
    ${props => !props.nomargin && css`
        margin-top: 50px;
    `}
`

const sectionGlyph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    text-align: center;
`

const glyphImg = styled.img`
    width: 80px;
    height: auto;
`

const glyphTitle = styled.h3`
    ${props => props.white && css`
        color: white !important;
    `}
    ${props => !props.white && css`
        color: ${consts.colorGray};
    `}
    font-size: 24px;
    margin: 20px 0;
    &:first-child {
        margin: 0 0 20px 0;
    }
    &:last-child {
        margin: 20px 0;
    }
`

const glyphTxt = styled.p`
    ${props => props.white && css`
        color: white !important;
    `}
    ${props => !props.white && css`
        color: ${consts.colorGray};
    `}
    color: ${consts.colorGray};
    font-size: 16px;
    margin: 0;
`

const glyphSeparator = styled.div`
    width: 130px;
    height: 3px;
    background-color: ${consts.colorGray};
`

const testimonialCtnr = styled.div`
    position: relative;
    width: ${consts.containerWidth};
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const testimonial = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0 0 0;
`

const testimonialImg = styled.img`
    width: 150px;
    height: 150px;
`

const testimonialTitle = styled.h3`
    font-family: 'Fredoka One', cursive;
    color: ${consts.colorBlue};
    font-size: 32px;
    font-weight: 300;
`

const testimonialTxt = styled.p`
    position: relative;
    color: ${consts.colorGray};
    font-size: 16px;
    font-weight: 400;
    width: 350px;
    &::before {
        content: '';
        position: absolute;
        top: -15px;
        left: -40px;
        background-image: url(${glyphs.quote_1});
        width: 35px;
        height: 24.5px;
    }
    &::after {
        content: '';
        position: absolute;
        background-image: url(${glyphs.quote_2});
        bottom: -15px;
        right: -40px;
        width: 35px;
        height: 24.5px;
    }
`

const footerCtnr = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    width: 1180px;
`

const footerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

const footerTitle = styled.h4`
    color: white;
    font-size: 16px;
    margin: 15px 0;
    & > a {
        text-decoration: none;
        color: white;
        font-size: 16px;
    }
`

const footerSubTitle = styled.h5`
    margin: 5px 0;
    & > a {
        text-decoration: none;
        color: white;
        font-weight: 300;
        font-size: 14px;
    }
`

const footerStores = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    & > a {
        margin-right: 15px;
    }
`

const footerStoreImg = styled.img`
    width: 110px;
    height: 32.42px;
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
    glyphTxt,
    glyphSeparator,
    testimonialCtnr,
    testimonial,
    testimonialImg,
    testimonialTitle,
    testimonialTxt,
    footerCtnr,
    footerColumn,
    footerTitle,
    footerSubTitle,
    footerStores,
    footerStoreImg
}