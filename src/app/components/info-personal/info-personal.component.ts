import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { IPersona } from '../../model/persona.model';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css'],
})
export class InfoPersonalComponent implements OnInit {

  constructor(public personaS: PersonaService) {}

  ngOnInit(): void {
  }
}
