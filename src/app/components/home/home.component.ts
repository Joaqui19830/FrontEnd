import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private personaS: PersonaService) { }

  ngOnInit(): void {
    this.personaS.onInit();
  }

}
