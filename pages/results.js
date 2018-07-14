import {Component, Fragment} from 'react'
import Page from 'layouts/Main'
import ButtonContainer from 'components/shared/ButtonContainer'

export default class Liqid extends Component {
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
