import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPersona } from '../model/persona.model';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class PersonaService {

  persona?: IPersona;

  constructor(private http: HttpClient) {}

  onInit(){
    this.getPersona();
  }

  private getPersona() {
    this.http
      .get<IPersona>(environment.baseUrl + '/ver/personas')
      .subscribe((personas: any) => {
        console.log(personas);
        
        this.persona = personas[0];
      });
  }

}
