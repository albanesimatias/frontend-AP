import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { FotoPerfilComponent } from './componentes/foto-perfil/foto-perfil.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor.service';
import { AddEducacionComponent } from './componentes/educacion/add-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AddHabilidadComponent } from './componentes/habilidades/add-habilidad.component';
import { EditHabilidadComponent } from './componentes/habilidades/edit-habilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FotoPerfilComponent,
    AcercaDeComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    AddEducacionComponent,
    EditEducacionComponent,
    AddHabilidadComponent,
    EditHabilidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
