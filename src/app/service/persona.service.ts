import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPersona } from '../model/persona.model';



@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private URL = 'http://localhost:8080/ver/';
  

  persona?: IPersona;

  constructor(private http: HttpClient) {}

  onInit(){
    this.getPersona();
  }

  private getPersona() {
    this.http
      .get<IPersona>(this.URL + 'personas')
      .subscribe((personas: any) => {
        console.log(personas);
        
        this.persona = personas[0];
      });
  }

}
