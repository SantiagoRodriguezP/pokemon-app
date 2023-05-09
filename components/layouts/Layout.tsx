import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'

type PropsLayout = PropsWithChildren & {
  title:string,
}

export const Layout:FC<PropsLayout> = ({children, title}) => {
  return (
    <>
    <Head>
      <title>{title || 'PokemonApp'}</title>
      <meta name="authors" content='Santiago Rodriguez' />
      <meta name="descriptions" content={`Esta es la información del pokemon ${title}`} />
      <meta name="keywords" content={`${title} XXXX, Pokemon, pokeapp`} />
    </Head>
    <main>
      {children}
    </main>
    </>
  )
}
