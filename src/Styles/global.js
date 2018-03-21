import styled, { injectGlobal } from 'styled-components'
import * as consts from './constants'

const Root = styled.div`
  position: relative;
  max-width: ${consts.containerWidth};
  margin: 0 auto;
`

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: sans-serif;
  }
`

export {
  Root
}