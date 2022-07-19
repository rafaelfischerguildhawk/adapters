import {
  IAdapter,
  IHttpClient,
  IPokemonPayload,
  IPokemonResponse,
  IPokemonState,
} from "../../entities";
import { getPokemonService } from "../../services/getPokemon";

// ADAPTER SHOULD LOOK LIKE THIS
export const getPokemon: IHttpClient<IPokemonPayload, IPokemonState> = async (
  payload
) => {
  const data = await getPokemonService({ name: payload.name });
  return pokemonAdapter(data);
};

export const pokemonAdapter: IAdapter<IPokemonResponse, IPokemonState> = (
  pokemonResponse
) => {
  return {
    height: pokemonResponse.height,
    id: pokemonResponse.id,
    name: pokemonResponse.name,
    weight: pokemonResponse.weight,
  };
};
