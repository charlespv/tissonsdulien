import styled from 'styled-components'
import * as consts from './constants'

const NavbarRoot = styled.div`
    width: 100%;
    height: 100px;
    background-color: white;
`

const NavbarContainer = styled.div`
    position: relative;
    margin: 0 auto;
    height: 100%;
    max-width: ${consts.containerWidth};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const NavbarLogo = styled.img`
    height: 60px;
    width: auto;
`

const NavbarLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    & a {
        color: #393939;
        text-decoration: none;
        margin-left: 15px;
    }
`

export {
    NavbarRoot,
    NavbarLogo,
    NavbarContainer,
    NavbarLinks
}