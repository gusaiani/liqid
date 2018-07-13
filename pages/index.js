import {Component, Fragment} from 'react'
import Header from 'components/shared/Header'
import Form from 'components/shared/Form'

export default class Liqid extends Component {
  handleSubmit = async (e) => {
    console.log('Submitted');
    e.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <Header/>

        <Form onSubmit={this.handleSubmit}>
          <Fragment>
            <h1>Cadastre-se</h1>
            <input type="text" placeholder="Nome" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Senha" name="password" />

            <LiqidButton disabled={loading} full type="submit">
              {loading ? 'Aguarde...' : 'Enviar'}
            </LiqidButton>
          </Fragment>
        </Form>
      </Fragment>
    )
  }
}
