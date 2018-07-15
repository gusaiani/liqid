import {Component, Fragment} from 'react'
import Container from './styles'
import {progressPercentage} from 'utils/questions'

export default class ProgressBar extends Component {
  render() {
    const {currentQuestion, isFinalPage} = this.props

    const percentage = isFinalPage ?
      100 : progressPercentage(currentQuestion)

    return (
      <Container>
        <div style={{width: percentage + '%'}}></div>
      </Container>
    )
  }
}

