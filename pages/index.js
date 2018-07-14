import {Component, Fragment} from 'react'
import TextInputContainer from 'components/shared/Form/TextInput'
import Router from 'next/router'
import Page from 'layouts/Main'
import Header from 'components/shared/Header'
import Form from 'components/shared/Form'
import Button from 'components/shared/Buttons'
import {
  findQuestion,
  nextQuestionKey,
  prevQuestionKey,
  firstQuestionKey
} from 'utils/questions'

export default class Liqid extends Component {
  state = {
    nextEnabled: false,
  }

  static getInitialProps(context) {
    const {q} = context.query
    const currentQuestion = q || firstQuestionKey
    return {currentQuestion}
  }

  componentDidMount() {
    const {currentQuestion} = this.props
    this.updateResponse(currentQuestion)
  }

  updateResponse = (question) => {
    const response = localStorage.getItem(question)

    let obj = {}
    obj[question] = response
    obj.nextEnabled = !!response
    obj.currentQuestion = question
    this.setState(obj)
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value
    const {currentQuestion} = this.state
    this.setState({nextEnabled: inputValue != ""})

    let obj = {}
    obj[currentQuestion] = inputValue
    this.setState(obj)
  }

  handleBack = () => {
    const {currentQuestion} = this.state
    const {questionPosition} = findQuestion(currentQuestion)
    const prevKey = prevQuestionKey(questionPosition)

    this.setState({currentQuestion: prevKey})
    this.persistAnswer()
    this.updateResponse(prevKey)

    Router.push(`/?q=${prevKey}`)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {currentQuestion} = this.state
    const {questionPosition} = findQuestion(currentQuestion)
    const nextKey = nextQuestionKey(questionPosition)

    this.persistAnswer()

    this.setState({currentQuestion: nextKey})
    this.updateResponse(nextKey)

    const nextUrl = nextKey ? `/?q=${nextKey}` : '/results'
    Router.push(nextUrl)
  }

  persistAnswer = () => {
    const {currentQuestion} = this.state

    localStorage.setItem(
      currentQuestion,
      this.state[currentQuestion]
    )
  }

  render() {
    const {currentQuestion} = this.state
    const {question, questionPosition, questionsLength} = findQuestion(currentQuestion)
    const {label, type, placeholder} = question

    return (
      <Page>
        <Header/>

        <Form onSubmit={this.handleSubmit}>
          <Fragment>
            <TextInputContainer
              label={label}
              placeholder={placeholder}
              name={currentQuestion}
              value={this.state[currentQuestion] || ""}
              handleChange={this.handleInputChange}
            />

            {(questionPosition > 0) &&
              <Button type="button" onClick={this.handleBack}>
                Back
              </Button>
            }
            <Button disabled={!this.state.nextEnabled} className="right">
              Next
            </Button>
          </Fragment>
        </Form>
      </Page>
    )
  }
}
