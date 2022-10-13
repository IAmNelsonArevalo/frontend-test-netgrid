import axios, {AxiosResponse} from "axios";
/** Interfaces */
import { LoginForm, RegisterForm } from "@/models/interfaces/auth.interfaces";

const useAuthProviders = () => {
    let url = "http://127.0.0.1:8000/api"
    const loginProvider = (user: LoginForm): Promise<AxiosResponse<any>> => {
        return new Promise((resolve, reject) => {
            try {
                const res = axios({
                    url: `${url}/auth/login`,
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
                    url: `${url}/auth/register`,
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