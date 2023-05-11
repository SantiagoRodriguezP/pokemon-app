import { NextPage, GetStaticProps, GetStaticPaths } from 'next'

import { Layout } from '@/components/components/layouts'
import { pokeAPi } from '@/components/api';
import { Pokemon } from '@/components/interface';
import DetailPokemon from '@/components/components/pokemon/DetailPokemon';
import { loadPokemon } from '@/components/utils';

interface PropsPokemon {
  pokemon: Pokemon
}

export const PokemonPage: NextPage<PropsPokemon> = ({ pokemon }) => {
  const { name } = pokemon;
  return (
    <>
      <Layout title={`Pokemon ${name}`}>
        <DetailPokemon pokemon={pokemon} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const paths = Array.from(Array(151).keys(), x => ({
    params: { id: `${x + 1}` }
  }));
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  return {
    props: {
      pokemon: await loadPokemon(id)
    }
  }
}

export default PokemonPage;
