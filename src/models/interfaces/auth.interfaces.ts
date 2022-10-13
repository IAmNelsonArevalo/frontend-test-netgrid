import { RequestAction } from "./general.interfaces";

export interface LogoutData {
    token: string;
    user: {}
}

export interface AuthState {
    session: LogoutData;
}

export interface LoginForm {
    email: string;
    password: string;
}

export interface RegisterForm extends LoginForm {
    name: string;
    address: string;
    complement: string;
    city: string;
    birthday: string;
}

export interface RegisterAction extends RequestAction {
    user: RegisterForm;
}