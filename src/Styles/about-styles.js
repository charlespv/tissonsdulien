import styled from 'styled-components'
import * as consts from './constants'

const root = styled.div`
    max-width: ${consts.containerWidth};
    margin: 0 auto;
    margin-top: 130px;
    margin-bottom: 200px;
`

const title = styled.h1`
    font-family: 'Fredoka One', cursive;
    font-size: 28px;
    font-weight: 300;
    color: ${consts.colorBlue};
`

const text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${consts.colorGray};
    margin: 30px 0;
`

export {
    root,
    title,
    text
}