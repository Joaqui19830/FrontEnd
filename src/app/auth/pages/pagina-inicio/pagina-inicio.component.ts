import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFacebookIconClicked(){
    console.log('Facebook clicked');
    
  }
  onInstagramIconClicked(){
    console.log('Insta click');
    
  }



}
