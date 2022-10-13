import { LoginForm, RegisterAction } from "@/models/interfaces/auth.interfaces";
import axios, { AxiosResponse } from "axios";
import Swal from "vue-sweetalert2";
import useAuthProviders from "../providers";
import Vue from "vue-class-component";

const useAuthActions = () => {
    /** Providers */
    const {loginProvider, registerProvider} = useAuthProviders();

    let url = "http://127.0.0.1:8000/api"
    const logout = ({commit}: any) => {
        commit("logout", {token: "", user: {}})
    }

    const createUser = ({commit}: any, data: any) => {
        commit('createUser', {token: "", user: {name: data.name, email: data.email, avatar: data.avatar}});
    }

    const login = ({commit}: any, user: LoginForm) => {
        return new Promise<void>((resolve, reject) => {
            try {
                const res = loginProvider(user);
                res.then((res) => {
                    const {transaction, data} = res.data;

                    if(transaction.status) {
                        commit("createUser", data);
                        return resolve();
                    }
                }).catch((err) => reject(err));
            } catch (error) {
                reject(error)
            }
        })
    }

    const register = ({commit}: any, request: RegisterAction) => {
        const {user, onSuccess, onError} = request;
        try {
            const res = registerProvider(user);
            res.then((response: any) => {
                if(response.data.transaction) {
                    onSuccess && onSuccess();
                }
            }).catch((err) => onError && onError(err));
            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error);
        }
    }

    return {
        logout,
        createUser,
        login,
        register
    }
}

export default useAuthActions;