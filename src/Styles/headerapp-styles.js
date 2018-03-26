import styled from 'styled-components'
import * as consts from './constants'
import landBg from '../Assets/landing-bg.jpg'

// HEADER APP

const headerAppRoot = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
    margin-top: 100px;
    background-color: #2F4E7C;
`

const headerAppCtnr = styled.div`
    position: relative;
    max-width: ${consts.containerWidth};
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const lbase = `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

const landing = styled.div`
    ${lbase}
    background-image: url(${landBg});
    background-size: cover;
    background-position: center;
`

const landingContainer = styled.div`
    max-width: ${consts.containerWidth};
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`

const landingTitle = styled.h1`
    color: white;
    font-family: 'Fredoka One', cursive;
    font-size: 50px;
    font-weight: 300;
    line-height: 2px;
`

const landingContent = styled.p`
    color: white;
    font-size: 18px;
    line-height: 5px;
`

const landingSeparator = styled.div`
    width: 90px;
    height: 6px;
    margin: 30px 0;
    background-color: white;
`

// APP MENU

const appMenu = styled.div`
    width: 430px;
    z-index: 1000;
    border-radius: 25px;
    padding: 35px 30px;
    box-sizing: border-box;
    display: block;
    text-align: center;
    background-color: white;
    & > div:last-child {
        font-weight: 700;
        font-size: 22px;
        border-radius: 26px;
    }
`

const appMenuTitle = styled.h2`
    color: ${consts.colorBlue};
    font-size: 32px;
    margin: 0;
`

const appMenuInputGroup = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 15px 0 35px 0;
    width: 100%;
    & > p {
        font-size: 16px;
        font-weight: 700;
        color: ${consts.colorGray}
    }
    & > div > label {
        font-size: 14px;
        font-weight: 400;
        color: ${consts.colorGray}
    }
    & > div {
        text-align: left;
        width: 100%;
    }
    & > div > div >input {
        font-size: 14px;
        font-weight: 400;
        box-sizing: border-box;
        width: 100%;
        color: black;
    }
`

// MAP

const map = styled.div`
    ${lbase}
`

const mapOverlay = styled.div`
    position: absolute;
    z-index: 800;
    width: 100%;
    height: 100%;
`

// EXPORTS

const lstyles = {
    landing: landing,
    landingContainer: landingContainer,
    title: landingTitle,
    content: landingContent,
    separator: landingSeparator
}

const mapStyles = {
    map: map,
    mapOverlay: mapOverlay
}

const headerAppStyles = {
    root: headerAppRoot,
    container: headerAppCtnr
}

const menuStyles = {
    appMenu: appMenu,
    title: appMenuTitle,
    inputGroup: appMenuInputGroup
}

export {
    lstyles,
    mapStyles,
    headerAppStyles,
    menuStyles
}