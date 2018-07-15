import {Component, Fragment} from 'react'
import Head from 'next/head'
import Container from './styles'
import Header from 'components/shared/Header'
import ProgressBar from 'components/shared/ProgressBar'

export default class MainLayout extends Component {
  render () {
    const {isFinalPage, currentQuestion, children} = this.props

    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />

          <link href="https://fonts.googleapis.com/css?family=Muli:300,400,700,800" rel="stylesheet" />
        </Head>

        <Header/>
        <ProgressBar isFinalPage={isFinalPage} currentQuestion={currentQuestion} />

        { children }

      </Container>
    )
  }
}
