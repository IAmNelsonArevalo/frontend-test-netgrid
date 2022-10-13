import axios, { AxiosResponse } from "axios";

const useHomeActions = () => {
    const getAllPokemons = ({commit}: any) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((res: AxiosResponse<any>) => {
            let newArray = res.data.results.map((item: any) => ({...item, id: parseInt(item.url.split("/")[6])}))
            commit("setPokemons", newArray);
        }).catch((err) => console.log(err));
    }

    const formatTable = ({commit}: any, data: any): void => {
        commit("setTableRows", data);
    }

    const getPokemon = ({commit}: any, id: any): void => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res: AxiosResponse<any>) => {
            commit("setPokemon", res.data)
        }).catch((err) => console.log(err))
    }

    return {
        getAllPokemons,
        formatTable,
        getPokemon
    };
}

export default useHomeActions;