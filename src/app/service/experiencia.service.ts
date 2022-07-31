import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }
  public lista():Observable<Experiencia[]>{
    return   this.http.get<Experiencia[]>( environment.baseUrl + '/ver/experiencia');
  }

  

  public save(experiencia: Experiencia):Observable<any>{
    return this.http.post<any>( environment.baseUrl + `/new/experiencia`, experiencia);
  }

  //Actualizar
  public update(id:number, experiencia: Experiencia):Observable<any>{
    return this.http.put<any>( environment.baseUrl + `/update/${id}`, experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>( environment.baseUrl + `/experiencia/delete/${id}`);
  }
}
