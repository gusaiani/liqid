import {Component, Fragment} from 'react'
import Page from 'layouts/Main'
import Header from 'components/shared/Header'
import Form from 'components/shared/Form'
import Button from 'components/shared/Buttons'
import {findQuestion} from 'utils/questions'

export default class Liqid extends Component {
  state = {
    errors: [],
    loading: false,
    data: {}
  }

  static getInitialProps(context) {
    const {q} = context.query
    return {questionKey: q}
  }

  handleSubmit = async (e) => {
    const {questionKey} = this.props
    const {questionPosition} = findQuestion(questionKey)
    console.log('Submitted', questionPosition);

    e.preventDefault()
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

            <Button disabled={loading} full type="submit">
              {loading ? 'Sending…' : 'Send'}
            </Button>
          </Fragment>
        </Form>
      </Page>
    )
  }
}
