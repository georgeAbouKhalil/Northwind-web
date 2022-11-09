import { authStore } from './../Redux/Store';
import axios from "axios";

class InterceptorsService {

    public createInterceptors(): void{
        axios.interceptors.request.use((request) => {

            // if we have a token 
            if(authStore.getState().token){
                //add a header to the request sending that token
                request.headers = {
                    authorization: "Bearer " + authStore.getState().token
                };
            }

            return request;
        });
    }
}

const interceptorsService = new InterceptorsService();

export default interceptorsService;