import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  project: Project[] = [];

  constructor(private proService: ProjectService) { }
 
  ngOnInit(): void {
    this.cargarProject();
  }

  cargarProject():void{
    this.proService.lista()
    .subscribe(data=> this.project = data);
  }

}
