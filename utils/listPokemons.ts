import { pokeAPi } from "../api";
import { Pokemon, PokemonListResponse } from "../interface";

export const loadPokemons = async () => {
  const { data } = await pokeAPi.get<PokemonListResponse>("/pokemon?limit=151");
  return data.results;
};

export const loadPokemon = async (nameOrId: string) => {
  const { data } = await pokeAPi.get<Pokemon>(`/pokemon/${nameOrId}`);
  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
  return pokemon;
};
