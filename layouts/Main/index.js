import Container from './styles'
import Header from 'components/shared/Header'
import Head from 'next/head'

export default ({ children }) => (
  <Container>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Muli:300,400,700,800" rel="stylesheet" />
    </Head>

    <Header/>

    { children }

  </Container>
)
