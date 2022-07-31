import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';
import { Experiencia } from '../../model/experiencia';
import { ExperienciaService } from '../../service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(private expeService: ExperienciaService, public storageService: StorageService) { }

  ngOnInit(): void { 
    this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.expeService.lista()
    .subscribe((data) => (this.experiencia = data));
  }

  EditarButtonClicked(){
    
  }

  BorrarButtonClicked(){
  
  }

}
