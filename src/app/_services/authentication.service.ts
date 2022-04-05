
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Signup } from '../_models/authentication'


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    constructor(private http: HttpClient){

    }

    signup(payload: Signup){
        const endpointUrl = '';
        return this.http.post(endpointUrl, payload);
    }
    
    login(payload: Login){
        const endpointUrl = '';
        return this.http.post(endpointUrl, payload);
    }

    forgetPassword(){

    }
}