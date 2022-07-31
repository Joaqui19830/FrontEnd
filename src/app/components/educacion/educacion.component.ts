import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EducacionService } from '../../service/educacion.service';
import { Educacion } from '../../model/educacion';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private eduService: EducacionService, public storageService: StorageService) {}

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.eduService.lista().subscribe((data) => (this.educacion = data));
  }

  EditarButtonClicked(){
    
  }

  BorrarButtonClicked(){
  
  }
}
 