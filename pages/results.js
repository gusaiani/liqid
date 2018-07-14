import {Component, Fragment} from 'react'
import Router from 'next/router'
import Page from 'layouts/Main'
import ButtonContainer from 'components/shared/ButtonContainer'
import {lastQuestionKey} from 'utils/questions'

export default class Liqid extends Component {
  handleBack = () => {
    Router.push(`/?q=${lastQuestionKey}`)
  }

  render() {
    return (
      <Page>
        Here are your results.

        <ButtonContainer
          showBack={true}
          showNext={false}
          handleBack={this.handleBack}
        />
      </Page>
    )
  }
}
