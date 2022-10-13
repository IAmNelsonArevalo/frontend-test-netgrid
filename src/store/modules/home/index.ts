import useHomeActions from "./actions";
import useHomeGetters from "./getters";
import useHomeMutations from "./mutation";
import useHomeStates from "./states";

const useHomeStore = () => {
    return {
        namespaced: true,
        actions: useHomeActions(),
        mutations: useHomeMutations(),
        state: useHomeStates(),
        getters: useHomeGetters()
    }
}

export default useHomeStore;