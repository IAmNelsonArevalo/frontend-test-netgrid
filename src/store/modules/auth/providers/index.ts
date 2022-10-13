import axios, {AxiosResponse} from "axios";
/** Interfaces */
import { LoginForm, RegisterForm } from "@/models/interfaces/auth.interfaces";

const useAuthProviders = () => {
    let url = "https://backend-test-netgrid.herokuapp.com/api"
    const loginProvider = (user: LoginForm): Promise<AxiosResponse<any>> => {
        return new Promise((resolve, reject) => {
            try {
                const res = axios({
                    url: `/auth/login`,
                    method: "POST",
                    data: user
                })

                resolve(res);
            } catch (error) {
                reject(error);
            }
        })
    }

    const registerProvider = (user: RegisterForm) => {
        return new Promise((resolve, reject) => {
            try {
                const res = axios({
                    url: `/auth/register`,
                    method: "POST",
                    data: user
                });

                resolve(res);
            } catch (error) {
                reject(error);
            }
        });
    }
    return {
        loginProvider,
        registerProvider
    }
}

export default useAuthProviders;