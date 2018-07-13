import {Component, Fragment} from 'react'
import Page from 'layouts/Main'
import Header from 'components/shared/Header'
import Form from 'components/shared/Form'
import Button from 'components/shared/Buttons'

export default class Liqid extends Component {
  state = {
    errors: [],
    loading: false,
    data: {}
  }

  handleSubmit = async (e) => {
    console.log('Submitted');
    e.preventDefault()
  }

  render() {
    const {errors, loading, data} = this.state

    return (
      <Page>
        <Header/>

        <Form onSubmit={this.handleSubmit}>
          <Fragment>
            <h1>How old are you?</h1>
            <input type="text" placeholder="Your age" name="age" />

            <Button disabled={loading} full type="submit">
              {loading ? 'Sending…' : 'Send'}
            </Button>
          </Fragment>
        </Form>
      </Page>
    )
  }
}
