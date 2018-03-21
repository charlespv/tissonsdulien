import styled from 'styled-components'
import * as consts from './constants.js'

const btnRoundedBase = `
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;

`

const btnRoundedTransparent = styled.div`
    ${btnRoundedBase}
    border: 1px solid ${consts.colorBlue};
    transition: all 0.15s;
    &:hover {
        background-color: ${consts.colorBlue};
        color: white;
    }
`

export {
    btnRoundedTransparent
}