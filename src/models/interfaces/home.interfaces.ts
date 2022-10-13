export interface PokemonsData {
    name: string;
    url: string;
    id: number;
}

export interface HomeStates {
    pokemons: Array<any> | Array<PokemonsData>;
    totalPages: number;
    tableItems: Array<any> | Array<PokemonsData>;
}