import {
  IPokemonDataAdapter,
  IPokemonState,
} from "../../entities/IPokemonState";

export const pokemonDataAdapter: IPokemonDataAdapter = (
  data: IPokemonState
) => {
  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    id: data.id,
  };
};
