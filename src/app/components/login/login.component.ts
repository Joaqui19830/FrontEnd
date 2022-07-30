import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observable } from 'rxjs';
import { KeyStorageENUM } from 'src/app/core/key-storage.enum';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    username: ['joako', [Validators.required]],
    password: ['tomate19830', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  login() {
    const { username, password } = this.miFormulario.value;

    this.authService
      .login(username, password)
      .then((response: any) => {
       this.storageService.setLoggedStatus(response.status);
        if (response.status) {
          this.router.navigateByUrl('/home');
        }
      })
      .catch((er) => console.log(er));
  }
}
