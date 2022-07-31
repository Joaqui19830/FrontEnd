import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/service/persona.service';
import { StorageService } from 'src/app/service/storage.service';
import { IPersona } from '../../model/persona.model';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css'],
})
export class InfoPersonalComponent implements OnInit {
  name?: FormControl;

  isFormEditable = false;

  constructor(
    public personaS: PersonaService,
    public storageService: StorageService
  ) {
    this.name = new FormControl('');
    this.name?.disable();
  }

  ngOnInit(): void {}

  updateStateEditable() {
    this.isFormEditable = !this.isFormEditable;
    if (this.isFormEditable) {
      this.name?.enable();
    } else {
      this.name?.disable();
    }
  }

  confirmarFormulario() {
    console.log(this.name?.value);
    console.log('Enviando informacion al servidor');
    
  }
  cancelarEditado() {
    this.name?.setValue(this.personaS.persona?.nombre);
    this.isFormEditable = false
    this.name?.disable();
  }
}
