import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Social } from '../model/social';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private http: HttpClient) { }

  public lista():Observable<Social[]>{
    return   this.http.get<Social[]>(environment.baseUrl + '/ver/social');
  }

  // public detail(id:number):Observable<Educacion>{
  //   return this.http.get<Educacion>(this.educURL + `educacion/delete/${id}`);
  // }

  public save(social: Social):Observable<any>{
    return this.http.post<any>(environment.baseUrl + `/new/social`, social);
  }

  //Actualizar
  public update(id:number, social:Social):Observable<any>{
    return this.http.put<any>(environment.baseUrl + `/update/${id}`, social);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(environment.baseUrl + `/social/delete/${id}`);
  }
}
