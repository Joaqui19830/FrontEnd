import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';
import { Skills } from '../../model/skills';
import { SkillsService } from '../../service/skills.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  skills: Skills[] = [];

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

  constructor(private skilService: SkillsService, public storageService: StorageService) { }

  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills():void{
    this.skilService.lista()
    .subscribe(data=> this.skills = data)
  }
  
  EditarButtonClicked(){
   
  }

  BorrarButtonClicked(){

  }
}
