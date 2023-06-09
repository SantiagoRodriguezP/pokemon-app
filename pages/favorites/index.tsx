import React from 'react'
import { useEffect, useState } from 'react';

import { Layout } from '@/components/components/layouts'
import { NoFavorite } from '@/components/components/ui';
import { localFavorites } from '@/components/utils';
import { FavoritePokemons } from '@/components/components/pokemon';





export const Favorites = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, [])


  return (

    <>
      <Layout title="Pokemones favoritos">
        {
          favoritePokemons.length === 0
            ? (<NoFavorite />)
            : (<FavoritePokemons pokemons={favoritePokemons} />)
        }
      </Layout>
    </>
  )
}


export default Favorites;