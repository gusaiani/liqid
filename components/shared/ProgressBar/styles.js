import styled from 'styled-components'
import * as colors from 'constants/colors'
import {mobileMedia} from 'constants/media'

export default styled.div`
  background: ${colors.lightestGray};
  border-radius: 20px;
  height: 4px;
  margin: 20px auto 40px;
  position: relative;
  width: 500px;

  @media ${mobileMedia} {
    width: 100%;
  }

  div {
    background: ${colors.red.medium};
    border-radius: 20px;
    height: 4px;
    width: 20%;
  }
`
