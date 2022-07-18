import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'login', component:LoginComponent},
      {path:'pagina-inicio', component:PaginaInicioComponent},
      {path:'**', redirectTo:'login'}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
