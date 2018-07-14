import {Component, Fragment} from 'react'
import Container from './styles'
import Button from 'components/shared/Buttons'

export default class ButtonContainer extends Component {
  render() {
    const {showBack, showNext, nextEnabled, handleBack} = this.props
    return (
      <Container>
        {showBack &&
          <Button type="button" onClick={handleBack}>
            Back
          </Button>
        }

        {showNext &&
          <Button disabled={!nextEnabled} className="right">
            Next
          </Button>
        }
      </Container>
    )
  }
}
