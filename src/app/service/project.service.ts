import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public lista():Observable<Project[]>{
    return   this.http.get<Project[]>(this.projURL + 'ver/project');
  }



  public save(project: Project):Observable<any>{
    return this.http.post<any>(this.projURL + `new/project`, project);
  }

  //Actualizar
  public update(id:number, project:Project):Observable<any>{
    return this.http.put<any>(this.projURL + `update/${id}`, project);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.projURL + `project/delete/${id}`);
  }
}
