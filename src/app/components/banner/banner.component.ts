import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public personaS: PersonaService) { }

  ngOnInit(): void {
  }

  onIconClicked(){
    console.log('Insta click');
    
  }

}
