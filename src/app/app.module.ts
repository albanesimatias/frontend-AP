import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor.service';
import { AddEducacionComponent } from './componentes/educacion/add-educacion-component/add-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion-component/edit-educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AddHabilidadComponent } from './componentes/habilidades/add-habilidad-component/add-habilidad.component';
import { EditHabilidadComponent } from './componentes/habilidades/edit-habilidad-component/edit-habilidad.component';
import { AddProyectoComponent } from './componentes/proyectos/add-proyecto-component/add-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto-component/edit-proyecto.component';
import { EditFotoComponent } from './componentes/acerca-de/edit-foto-component/edit-foto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RecargaDirective } from './directives/recarga.directive';
import { EditNombreComponent } from './componentes/acerca-de/edit-nombre-component/edit-nombre.component';
import { EditDescripcionComponent } from './componentes/acerca-de/edit-descripcion-component/edit-descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
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
    AddProyectoComponent,
    EditProyectoComponent,
    EditFotoComponent,
    RecargaDirective,
    EditNombreComponent,
    EditDescripcionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [EditFotoComponent],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
