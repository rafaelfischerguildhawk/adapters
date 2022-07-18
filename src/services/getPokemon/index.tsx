import { pokemonDataAdapter } from "../../adapters/IPokemonDataAdapter";
import { api } from "../../config/axios";
import { IGetPokemon, IPokemonState } from "../../entities/IPokemonState";

export const getPokemonService: IGetPokemon = async (name) => {
  try {
    const { data } = await api.get<IPokemonState>(`/pokemon/${name}`);

    return {
      data: pokemonDataAdapter(data),
      error: null,
    };
  } catch (e: any) {
    return { data: null, error: e.message };
  }
};
