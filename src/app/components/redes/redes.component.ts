import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialService } from '../../service/social.service';
import { Social } from '../../model/social';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  social: Social[] = [];

  constructor(private router: Router,
              private socialService: SocialService,
              public storageService: StorageService) { }

  ngOnInit(): void {
    this.cargarSocial();
  }

  cargarSocial():void{
    this.socialService.lista()
    .subscribe(data=> this.social = data)
  }

  onFacebookIconClicked(){
    window.open('https://www.facebook.com/joaquin.carrizo.92')
    
  }
 

  loginButtonClicked(){
    this.router.navigateByUrl('/login');
  }

  logoutButtonClicked(){
    this.storageService.setLoggedStatus(false);
  }
}
