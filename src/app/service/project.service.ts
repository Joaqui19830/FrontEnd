import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public lista():Observable<Project[]>{
    return   this.http.get<Project[]>(environment.baseUrl + '/ver/project');
  }



  public save(project: Project):Observable<any>{
    return this.http.post<any>(environment.baseUrl + `/new/project`, project);
  }

  //Actualizar
  public update(id:number, project:Project):Observable<any>{
    return this.http.put<any>(environment.baseUrl + `/update/${id}`, project);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(environment.baseUrl + `/project/delete/${id}`);
  }
}
