import {Component, Fragment} from 'react'
import TextInputContainer from 'components/shared/Form/TextInput'
import SelectInputContainer from 'components/shared/Form/SelectInput'
import RadioInputContainer from 'components/shared/Form/RadioInput'
import Router from 'next/router'
import Page from 'layouts/Main'
import Form from 'components/shared/Form'
import ButtonContainer from 'components/shared/ButtonContainer'
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

    window.onpopstate = this.onBackButtonEvent
  }

  onBackButtonEvent = (e) => {
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
    const {label, type, placeholder, options} = question

    return (
      <Page>

        <Form onSubmit={this.handleSubmit}>
          <Fragment>
            {(type == "text") &&
              <TextInputContainer
                label={label}
                placeholder={placeholder}
                name={currentQuestion}
                value={this.state[currentQuestion] || ""}
                handleChange={this.handleInputChange}
              />
            }

            {(type == "select") &&
              <SelectInputContainer
                label={label}
                name={currentQuestion}
                value={this.state[currentQuestion] || ""}
                options={options}
                handleChange={this.handleInputChange}
              />
            }

            {(type == "radio") &&
              <RadioInputContainer
                label={label}
                name={currentQuestion}
                value={this.state[currentQuestion] || ""}
                options={options}
                handleChange={this.handleInputChange}
              />
            }

            <ButtonContainer
              showBack={questionPosition > 0}
              showNext={true}
              nextEnabled={this.state.nextEnabled}
              handleBack={this.handleBack}
            />
          </Fragment>
        </Form>
      </Page>
    )
  }
}
