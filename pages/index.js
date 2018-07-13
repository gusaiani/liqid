import {Component, Fragment} from 'react'
import Router from 'next/router'
import Page from 'layouts/Main'
import Header from 'components/shared/Header'
import Form from 'components/shared/Form'
import Button from 'components/shared/Buttons'
import {
  findQuestion,
  nextQuestionKey,
  prevQuestionKey} from 'utils/questions'

export default class Liqid extends Component {
  state = {
    errors: [],
    data: {}
  }

  static getInitialProps(context) {
    const {q} = context.query
    return {questionKey: q}
  }

  handleBack = () => {
    const {questionKey} = this.props
    const {questionPosition} = findQuestion(questionKey)
    const prevKey = prevQuestionKey(questionPosition)

    Router.push(`/?q=${prevKey}`)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {questionKey} = this.props
    const {questionPosition} = findQuestion(questionKey)
    const nextKey = nextQuestionKey(questionPosition)

    Router.push(`/?q=${nextKey}`)
  }

  render() {
    const {questionKey} = this.props
    const {question, questionPosition, questionsLength} = findQuestion(questionKey)
    const {label, type, placeholder} = question
    const {errors, loading, data} = this.state

    return (
      <Page>
        <Header/>

        <Form onSubmit={this.handleSubmit}>
          <Fragment>
            <h1>{label}</h1>
            <input type="text" placeholder={placeholder} name={questionKey} />

            {(questionPosition > 0) &&
              <Button type="button" onClick={this.handleBack}>
                Back
              </Button>
            }
            <Button className="right">
              Next
            </Button>
          </Fragment>
        </Form>
      </Page>
    )
  }
}
