import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/login-usuario';


import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

   login(username: string, password:string ){
    const url = `${this.baseUrl}/login`;
    const body = {username, password};

    return lastValueFrom(this.http.post(url, body));
    // return this.http.post(url, body)
  }
}
