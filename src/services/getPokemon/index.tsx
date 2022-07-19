import { api } from "../../config/axios";
import { IHttpClient, IPokemonPayload, IPokemonResponse } from "../../entities";

// SERVICE SHOULD LOOK LIKE THIS
export const getPokemonService: IHttpClient<
  IPokemonPayload,
  IPokemonResponse
> = async (payload) => {
  const { data } = await api.get<IPokemonResponse>(`/pokemon/${payload.name}`);
  return data;
};
