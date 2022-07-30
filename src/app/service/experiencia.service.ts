import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expeURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  public lista():Observable<Experiencia[]>{
    return   this.http.get<Experiencia[]>(this.expeURL + 'ver/experiencia');
  }

  

  public save(experiencia: Experiencia):Observable<any>{
    return this.http.post<any>(this.expeURL + `new/experiencia`, experiencia);
  }

  //Actualizar
  public update(id:number, experiencia: Experiencia):Observable<any>{
    return this.http.put<any>(this.expeURL + `update/${id}`, experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.expeURL + `experiencia/delete/${id}`);
  }
}
