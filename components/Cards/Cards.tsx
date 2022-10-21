import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
`
const CardsContent = styled.div`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 320px;
    height: 200px;

    &:hover, :focus, :active {
        color: #0070f3;
        border-color: #0070f3;
    }

    & h2 {
        margin: 0 0 2rem 0;
        font-size: 1.2rem;
        text-align: center;
    }

    & p {
        margin: 0;
        font-size: 1rem;
        line-height: 1.5;
    }
`

export default function Cards() {
  return (
    <>
        <Container>
            <CardsContent>
                <Link href="/">
                    <a>
                        <h2>Encontre o erro  &rarr;</h2>
                        <p>Existe um erro neste arquivo. Veja que este bloco aparece diferente na tela.</p>
                    </a>
                </Link>
            </CardsContent>

            <CardsContent>  
                <Link href="https://nextjs.org/learn">
                    <a>
                        <h2>Crie um repositório &rarr;</h2>
                        <p>Após concluir o trabalho suba o código no github do grupo</p>
                    </a>
                </Link>
            </CardsContent>

            <CardsContent>      
                <Link href="https://github.com/vercel/next.js/tree/canary/examples">
                    <a>
                        <h2>Evite componentes demais &rarr;</h2>
                        <p>Crie somente componentes essenciais.</p>
                    </a>
                </Link>
            </CardsContent>

            <CardsContent>
                <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                    <a>
                        <h2>Trabalho em grupo &rarr;</h2>
                        <p>
                        Ajude para que todos do grupo participe, envolva-se.
                        </p>
                    </a>
                </Link>
            </CardsContent>
        </Container>
    </>
  )
}
