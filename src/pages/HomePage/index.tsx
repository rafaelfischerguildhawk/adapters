import { useEffect, useState } from "react";
import { IPokemonState } from "../../entities/IPokemonState";
import { getPokemonService } from "../../services/getPokemon";

export const HomePage = () => {
  const [pokemon, setPokemon] = useState<IPokemonState>();

  useEffect(() => {
    (async () => {
      const { data: pokemon, error } = await getPokemonService("pikachu");

      if (error || !pokemon) {
        alert(error);
        return;
      }

      setPokemon(pokemon);
    })();
  }, []);

  return (
    <div>
      <p>Name: {pokemon?.name}</p>
      <p>Height: {pokemon?.height}</p>
      <p>Weight: {pokemon?.weight}</p>
    </div>
  );
};
