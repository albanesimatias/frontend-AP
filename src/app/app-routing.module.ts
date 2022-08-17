import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducacionComponent } from './componentes/educacion/add-educacion-component/add-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion-component/edit-educacion.component';
import { AddHabilidadComponent } from './componentes/habilidades/add-habilidad-component/add-habilidad.component';
import { EditHabilidadComponent } from './componentes/habilidades/edit-habilidad-component/edit-habilidad.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AddProyectoComponent } from './componentes/proyectos/add-proyecto-component/add-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto-component/edit-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
