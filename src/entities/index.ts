export interface Type2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface IPokemonResponse {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_types: any[];

  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface IPokemonPayload {
  name: string;
}
export interface IPokemonState {
  name: string;
  weight: number;
  height: number;
  id: number;
}

export interface IHttpClient<Payload, Response> {
  (payload: Payload): Promise<Response>;
}

export interface IAdapter<Payload, Response> {
  (payload: Payload): Response;
}
