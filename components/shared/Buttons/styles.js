import styled from 'styled-components'
import * as colors from 'constants/colors'

export default styled.button`
  cursor: pointer;
  float: left;
  font-size: 14px;
  font-weight: 600;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px 0px rgba(38, 38, 38, 0.2);
  padding: 7px 12px 9px;
  
  &.right {
    float: right;
  }
`

