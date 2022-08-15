import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfil } from '../model/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  perfilURL = "http://localhost:8080/perfil/";
  constructor(private httpClient: HttpClient) { }

  public getPerfil(): Observable<Perfil>{
    return this.httpClient.get<Perfil>(this.perfilURL+"get");
  }

  public update_nombre(nombre: string): Observable<any> {
    return this.httpClient.put<any>(this.perfilURL+"update-nombre", nombre);
  }

  public update_descripcion(descripcion: string): Observable<any> {
    return this.httpClient.put<any>(this.perfilURL+"update-descripcion",descripcion);
  }

  public subir_foto(imagen: File){
    const formData = new FormData();
    formData.append('file', imagen);
    return this.httpClient.post(this.perfilURL+"subir-foto",formData);
  }
}