import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { NavBarDefault } from '../ui'

type PropsLayout = PropsWithChildren & {
  title: string,
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<PropsLayout> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="authors" content='Santiago Rodriguez' />
        <meta name="descriptions" content={`Esta es la información del pokemon ${title}`} />
        <meta name="keywords" content={`${title} XXXX, Pokemon, pokeapp`} />

        <meta property={`og:title" content="Información sobre el pokémon ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre el pokémon ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <main>
        <NavBarDefault />
        {children}
      </main>
    </>
  )
}
