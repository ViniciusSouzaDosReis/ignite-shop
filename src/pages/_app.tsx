import { AppProps } from 'next/app'
import Image from 'next/future/image'

import { globalStyles } from '../../styles/global'
import { Container, Header } from '../../styles/pages/app'
import logoImg from '../assets/Logo.svg'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo da empresa" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App
