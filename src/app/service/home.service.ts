import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  recargaPerfil: boolean = true;
  recargaEducacion: boolean = true;
  recargaHabilidad: boolean = true;
  recargaProyecto: boolean = true;
  constructor() { }

  public recargarEducacion():void{
    this.recargaEducacion = !this.recargaEducacion;
  }
  public recargarPerfil():void{
    this.recargaPerfil = !this.recargaPerfil;
  }
  public recargarHabilidades():void{
    this.recargaHabilidad = !this.recargaHabilidad;
  }
  public recargarProyecto():void{
    this.recargaProyecto = !this.recargaProyecto;
  }
}
