import {Component, Fragment} from 'react'
import Router from 'next/router'
import Page from 'layouts/Main'
import ButtonContainer from 'components/shared/ButtonContainer'
import {questions, lastQuestionKey} from 'utils/questions'

export default class Liqid extends Component {
  componentDidMount = () => {
    questions.map(question => {
      const {query} = question

      let obj = {}
      obj[query] = localStorage.getItem(query)
      this.setState(obj)
    })
  }

  handleBack = () => {
    Router.push(`/?q=${lastQuestionKey}`)
  }

  render() {
    return (
      <Page>
        Here are your results.

        {questions.map(question => {
          return <div key={question.query}>
            <p>{question.label}</p>
            {this.state &&
              <p>{this.state[question.query]}</p>
            }
          </div>
        })}

        <ButtonContainer
          showBack={true}
          showNext={false}
          handleBack={this.handleBack}
        />
      </Page>
    )
  }
}
