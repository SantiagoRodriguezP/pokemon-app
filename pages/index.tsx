import { NextPage } from "next"
import { Layout } from "../components/layouts";
import { NavBarDefault } from "../components/ui";
import { GetStaticProps } from 'next'
import pokeAPi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from "../interface";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[]
}

export const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pókemones">
        
        <Grid.Container gap={2}>
          {
            pokemons.map((pokemon) => (<PokemonCard pokemon={pokemon} key={pokemon.id} />))
          }
        </Grid.Container>
      </Layout >
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }));


  return {
    props: {
      pokemons
    }
  }
}


export default HomePage;