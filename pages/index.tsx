import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Main from '../components/Main'
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 0 2rem;
`

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Projeto React - Trabalho em Grupo</title>
        <meta name="description" content="Objetivo é desmembrar este arquivo em vários componentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </Container>
  )
}

export default Home
