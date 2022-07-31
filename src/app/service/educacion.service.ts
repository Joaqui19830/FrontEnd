import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
 
  
  constructor(private http:HttpClient) { }

  public lista():Observable<Educacion[]>{
    return   this.http.get<Educacion[]>(environment.baseUrl + '/ver/educacion');
  }

  // public detail(id:number):Observable<Educacion>{
  //   return this.http.get<Educacion>(this.educURL + `educacion/delete/${id}`);
  // }

  public save(educacion: Educacion):Observable<any>{
    return this.http.post<any>(this.educURL + `new/educacion`, educacion);
  }

  //Actualizar
  public update(id:number, educacion:Educacion):Observable<any>{
    return this.http.put<any>(this.educURL + `update/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.educURL + `educacion/delete/${id}`);
  }
 


 

}



// OnInit(){
//   this.getEducacion();
// }


// private getEducacion(){
//   this.http
//   .get<IEducacion>(this.URL + 'educacion')
//   .subscribe((educacaciones) =>{
//     this.educacion = educacaciones
//   } )
// }