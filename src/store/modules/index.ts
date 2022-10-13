import useAuthStore from "./auth";
import useHomeStore from "./home";

const useStoreModules = () => {
    const modules = {
        auth: useAuthStore(),
        home: useHomeStore()
    };

    return {
        modules
    }
}

export default useStoreModules;