const Home = () => import("./Home");
const Login = () => import("./Login");
const Register = () => import("./Register");

const useScreens = () => {
    return {
        Home,
        Login,
        Register
    };
}

export default useScreens;