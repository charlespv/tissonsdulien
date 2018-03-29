import styled, { css } from 'styled-components'
import * as consts from './constants'

const root = styled.div`
    max-width: 600px;
    margin: 30px auto 0 auto;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
    padding: 35px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`

const logoCtnr = styled.div`
    margin-top: 110px;
    width: 100%;
    text-align: center;
`

const logo = styled.img`
    width: 110px;
    height: auto;
`

const inputGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 30px;
`

const title = styled.h2`
    color: ${consts.colorBlue};
    font-family: 'Fredoka One', cursive;
    font-size: 24px;
    font-weight: 300;
`

const label = styled.label`
    font-size: 14px;
    color: ${consts.colorGray};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 25px;
`

const inputBase = `
    padding: 10px 20px;
    background-color: #FAFAFA;
    color: black;
    border-radius: 30px;
    border: none;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
    appearence: none;
`

const input = styled.input`
    ${inputBase}
    ${props => props.type!=='radio' && css`
        width: 100%;
    `}
    ${props => props.type==='radio' && css`
        margin: 0 10px;
    `}
`

const select = styled.select`
    ${inputBase}
    width: 100%;
`

export {
    root,
    logoCtnr,
    logo,
    title,
    inputGroup,
    select,
    label,
    input
}