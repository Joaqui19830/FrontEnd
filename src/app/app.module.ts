import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HysComponent } from './components/hys/hys.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { BannerComponent } from './components/banner/banner.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HysComponent,
    EducacionComponent,
    ExperienciaComponent,
    BannerComponent,
    InfoPersonalComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
