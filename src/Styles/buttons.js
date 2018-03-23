import styled from 'styled-components'
import * as consts from './constants.js'

const roundedBase = `
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
`

const roundedTransparent = styled.div`
    ${roundedBase}
    border: 1px solid ${consts.colorBlue};
    transition: all 0.15s;
    &:hover {
        background-color: ${consts.colorBlue};
        color: white;
    }
`

const roundedBlue = styled.div`
    ${roundedBase}
    background-color: ${consts.colorBlue};
    color: white;
`

export {
    roundedTransparent,
    roundedBlue
}