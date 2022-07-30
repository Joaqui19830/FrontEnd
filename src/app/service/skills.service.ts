import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skilURL = 'http://localhost:8080/'; 

  constructor(private http: HttpClient) { }

  public lista():Observable<Skills[]>{
    return   this.http.get<Skills[]>(this.skilURL + 'ver/skills');
  }



  public save(skills: Skills):Observable<any>{
    return this.http.post<any>(this.skilURL + `new/skills`, skills);
  }

  //Actualizar
  public update(id:number, skills: Skills):Observable<any>{
    return this.http.put<any>(this.skilURL + `update/${id}`, skills);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.skilURL + `skills/delete/${id}`);
  }
}
