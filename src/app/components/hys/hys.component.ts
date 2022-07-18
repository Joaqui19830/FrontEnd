import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  hysArray = [
    {
      id: 'id',
      percent:10,
      title:'HTML'
    },
    {
      id: 'id',
      percent:20,
      title:'CSS'
    },
    {
      id: 'id',
      percent:35,
      title:'Ingles'
    },
    {
      id: 'id',
      percent:80,
      title:'TS'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
