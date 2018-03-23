import styled, { injectGlobal } from 'styled-components'
import * as consts from './constants'

const Root = styled.div`
  position: relative;
  max-width: ${consts.containerWidth};
  margin: 0 auto;
`

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Fredoka+One|Open+Sans:400,700');

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
  }
`

export {
  Root
}