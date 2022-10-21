import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled';
import React from 'react'

const FooterContent = styled.footer `
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
`

export default function Footer() {
  return (
    <>
        <FooterContent>
            <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                <a>
                    Powered by{' '}
                    <span>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </Link>
        </FooterContent>
    </>
  )
}
