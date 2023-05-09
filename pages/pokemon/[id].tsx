'use client'
import { useState, useEffect } from 'react';

import { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image';
import { Grid, Card, Text, Button, Container } from '@nextui-org/react';

import { Layout } from '@/components/components/layouts'
import { pokeAPi } from '@/components/api';
import { Pokemon } from '@/components/interface';
import { localFavorites } from '@/components/utils';


interface PropsPokemon {
  pokemon: Pokemon
}

export const PokemonPage: NextPage<PropsPokemon> = ({ pokemon }) => {
  const { id, name } = pokemon;

  const [isInFavorites, setIsInFavorites] = useState(false);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
  };

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);


  return (
    <>
      <Layout title={`Pokemon ${name}`}>
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
          <Grid xs={12} sm={4}>
            <Card>
              <Card.Body>
                <Card.Image
                  src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                  alt={name}
                  width="100%"
                  height={200}
                />
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text h1 transform='capitalize'>{name}</Text>
                <Button
                  color="gradient"
                  ghost={!isInFavorites}
                  onPress={onToggleFavorite}
                >{isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}</Button>
              </Card.Header>

              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={name}
                    width={100}
                    height={100}
                  />
                </Container>
              </Card.Body>
            </Card>

          </Grid>
        </Grid.Container>

      </Layout>
    </>
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

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

  const { data } = await pokeAPi.get<Pokemon>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage;
