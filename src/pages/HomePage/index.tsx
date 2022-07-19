import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getPokemon } from "../../adapters/IPokemonDataAdapter";
import { IPokemonState } from "../../entities";

export const HomePage = () => {
  const { data } = useQuery(["pokemons"], () =>
    getPokemon({ name: "charizard" })
  );
  console.log("query result", data);

  const [pokemon, setPokemon] = useState<IPokemonState>();
  console.log("raw result", data);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPokemon({ name: "charizard" });
        setPokemon(data);
      } catch (e) {
        alert("Error");
      }
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
