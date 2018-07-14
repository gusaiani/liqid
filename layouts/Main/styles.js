import styled from 'styled-components'

export default styled.div`
  font-family: 'Muli';
  margin: 0 auto;
  width: 500px;

  div.result {
    margin-bottom: 30px;

    &:first-of-type {
      margin-top: 40px;
    }

    p {
      font-size: 22px;
      margin-top: 6px;
      &:first-of-type {
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 0;
        text-transform: uppercase;
      }
    }
  }
`
