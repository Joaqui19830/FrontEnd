import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { RedesComponent } from './pages/redes/redes.component';



@NgModule({
  declarations: [
    LoginComponent,
    PaginaInicioComponent,
    RedesComponent,
   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
