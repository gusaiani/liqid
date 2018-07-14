import {Component, Fragment} from 'react'
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
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  state = {}

  componentWillReceiveProps(nextProps) {
    this.setState({
      nextEnabled: false,
      inputValue: ""
    })
  }

  componentDidMount(context) {
    const {questionKey} = this.props
    let obj = {}
    obj[questionKey] = localStorage.getItem(questionKey)
    this.setState(obj)
  }

  static getInitialProps(context) {
    const {q} = context.query
    const questionKey = q || firstQuestionKey
    return {questionKey}
  }

  handleInputChange = () => {
    const {questionKey} = this.props
    const inputValue = this.myRef.current.value
    this.setState({nextEnabled: inputValue != ""})

    let obj = {}
    obj[questionKey] = inputValue
    this.setState(obj)
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

    localStorage.setItem(
      questionKey,
      this.state[questionKey]
    )

    if (nextKey) {
      Router.push(`/?q=${nextKey}`)
    } else {
      Router.push('/results')
    }
  }

  render() {
    const {questionKey} = this.props
    const {question, questionPosition, questionsLength} = findQuestion(questionKey)
    const {label, type, placeholder} = question

    return (
      <Page>
        <Header/>

        <Form onSubmit={this.handleSubmit}>
          <Fragment>
            <h1>{label}</h1>
            <input
              type="text"
              placeholder={placeholder}
              ref={this.myRef}
              name={questionKey}
              value={this.state[questionKey]}
              onChange={this.handleInputChange}/>

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
