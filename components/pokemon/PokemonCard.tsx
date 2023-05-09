import { Grid, Card, Text, Row } from '@nextui-org/react'
import React, { FC } from 'react'
import { SmallPokemon } from '../../interface/pokemon-list';

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard:FC<Props> = ({pokemon}) => {
  return (
  <Grid xs={6} sm={3} key={pokemon.id} css={{p:1}}>
    <Card isPressable>
      <Card.Body css={{ p: 1 }}>
        <Card.Image
          src={pokemon.img}
        
          width="100%"
          height={140}
          alt={pokemon.name}
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Row wrap="wrap" justify="space-between" align="center">
          <Text b transform='capitalize'>{pokemon.name}</Text>
          <Text>
            {pokemon.id}
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  </Grid>

  )
}
