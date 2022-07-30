import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Social } from '../model/social';


@Injectable({
  providedIn: 'root'
})
export class SocialService {
  sociURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public lista():Observable<Social[]>{
    return   this.http.get<Social[]>(this.sociURL + 'ver/social');
  }

  // public detail(id:number):Observable<Educacion>{
  //   return this.http.get<Educacion>(this.educURL + `educacion/delete/${id}`);
  // }

  public save(social: Social):Observable<any>{
    return this.http.post<any>(this.sociURL + `new/social`, social);
  }

  //Actualizar
  public update(id:number, social:Social):Observable<any>{
    return this.http.put<any>(this.sociURL + `update/${id}`, social);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.sociURL + `social/delete/${id}`);
  }
}
