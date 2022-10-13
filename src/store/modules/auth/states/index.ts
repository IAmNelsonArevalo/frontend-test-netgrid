const useStatesAuth = () => {
    const session = {
        token: "",
        user: {}
    }

    return {
        session,
    };
}

export default useStatesAuth;