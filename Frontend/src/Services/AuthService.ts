import { authStore } from './../Redux/Store';

import axios from "axios";
import UserModel from "../Models/userModel";
import config from '../Utils/Config';
import { loginAction, logoutAction, registerAction } from '../Redux/AuthState';
import CredentialsModel from '../Models/CredentialsModel';

class AuthService {
    
    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(config.urls.register, user);
        const token = response.data;
        authStore.dispatch(registerAction(token));
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(config.urls.login, credentials);
        const token = response.data;
        authStore.dispatch(loginAction(token));
    }

    public logout(): void {
        authStore.dispatch(logoutAction());
    }

    public isLoggedIn(){
        return authStore.getState().token !== null;
    }
}



const authService = new AuthService();

export default authService;