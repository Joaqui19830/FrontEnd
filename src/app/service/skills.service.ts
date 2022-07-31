import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService { 

  constructor(private http: HttpClient) { }

  public lista():Observable<Skills[]>{
    return   this.http.get<Skills[]>(environment.baseUrl + '/ver/skills');
  }



  public save(skills: Skills):Observable<any>{
    return this.http.post<any>(environment.baseUrl + `/new/skills`, skills);
  }

  //Actualizar
  public update(id:number, skills: Skills):Observable<any>{
    return this.http.put<any>(environment.baseUrl + `/update/${id}`, skills);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(environment.baseUrl + `/skills/delete/${id}`);
  }
}
