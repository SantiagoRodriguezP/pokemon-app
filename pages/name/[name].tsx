import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Pokemon } from '@/components/interface'
import { Layout } from '@/components/components/layouts'
import { loadPokemon, loadPokemons } from '@/components/utils'
import DetailPokemon from '@/components/components/pokemon/DetailPokemon'

interface Props {
  pokemon: Pokemon
}

export const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={`Pokemon ${pokemon.name}`}>
      <DetailPokemon pokemon={pokemon} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const  data  = await loadPokemons();
  const paths = data.map(pokemon => ({ params: { name: pokemon.name } }));
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await loadPokemon(name);

  return {
    props: {
      pokemon
    }
  }
}

export default PokemonByNamePage;