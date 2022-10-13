import { HomeStates, PokemonsData } from "@/models/interfaces/home.interfaces";

const useHomeMutations = () => {
    const setPokemons = (state: HomeStates, data: Array<PokemonsData>): void => {
        console.log(data)
        state.pokemons = data;
    }

    const setTableRows = (state: HomeStates, data: {page: number, pokemons: Array<PokemonsData>}): void => {
        console.log(data.page)
        state.totalPages = Math.ceil(data.pokemons.length / 10);
        state.tableItems = data.pokemons.slice((data.page - 1) * 10, data.page * 10);
    }

    const setPokemon = (state: any, data: any): void => {
        state.pokemon = data;
    }

    return {
        setPokemons,
        setTableRows,
        setPokemon
    }
}

export default useHomeMutations;