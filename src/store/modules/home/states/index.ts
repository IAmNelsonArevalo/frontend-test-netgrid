import { PokemonsData } from "@/models/interfaces/home.interfaces";

const useHomeStates = () => {
  /**
   * Pokemon's state.
   * @var {Array}
   */
  const pokemons: Array<any> = [];

  /**
   * Table pages state
   * @var {number}
   */
  const totalPages = 1;

  /**
   * Table items state
   * @var {Array<PokemonData>}
   */
  const tableItems: Array<PokemonsData> | Array<any> = [];

  const pokemon: any = {};

  return {
    pokemons,
    totalPages,
    tableItems,
    pokemon
  };
};

export default useHomeStates;
