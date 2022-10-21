import React from 'react'
import styled from '@emotion/styled';
import Cards from '../Cards';

const MainContent = styled.main`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        text-align: center;
    }

    & p {
        margin: 4rem 0;
        line-height: 1.5;
        font-size: 1.5rem;
        text-align: center;
    }
`

export default function Main() {
  return (
    <>
        <MainContent>
            <h1>
            Bem vindo ao projeto do grupo 1!
            </h1>

            <p>
            Priscilla Correa, Fran, Mylena Mel, Andressa Helena, Julia Nunes, Maria Luísa
            </p>

            <Cards />
        </MainContent>
    </>
  )
}
