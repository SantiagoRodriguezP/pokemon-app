import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { Grid, Card, Button, Container, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti'

import { Pokemon } from '@/components/interface';
import { localFavorites } from '@/components/utils';

interface PropsPokemon {
  pokemon: Pokemon
}

export const DetailPokemon: NextPage<PropsPokemon> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(false);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    });
  };
  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);

  return (
    <Grid.Container css={{ marginTop: '5px' }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card>
          <Card.Body>
            <Card.Image
              src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
              alt={pokemon.name}
              width="100%"
              height={200}
            />
          </Card.Body>
        </Card>
      </Grid>

      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text h1 transform='capitalize'>{pokemon.name}</Text>
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
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Body>
        </Card>

      </Grid>
    </Grid.Container>
  )
}
export default DetailPokemon;