import useAuthActions from "./actions";
import useGetters from "./getters";
import useMutations from "./mutations";
import useStatesAuth from "./states";

const useAuthStore = () => {
    return {
        namespaced: true,
        state: useStatesAuth(),
        actions: useAuthActions(),
        mutations: useMutations(),
        getters: useGetters()
    }
}

export default useAuthStore;