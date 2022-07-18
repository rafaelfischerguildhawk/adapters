export interface IPokemonState {
  name: string;
  weight: number;
  height: number;
  id: number;
}

export interface IGetPokemon {
  (name: string): Promise<{
    data: IPokemonState | null;
    error: any;
  }>;
}

export interface IPokemonDataAdapter {
  (payload: IPokemonState): IPokemonState;
}
