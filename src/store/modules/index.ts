import useAuthStore from "./auth";

const useStoreModules = () => {
    const modules = {
        auth: useAuthStore()
    };

    return {
        modules
    }
}

export default useStoreModules;