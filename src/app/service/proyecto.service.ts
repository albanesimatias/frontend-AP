import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //Local
  //proyectoURL = "http://localhost:8080/proyecto/";

  //Remoto Heroku
  proyectoURL = "https://backend-portfolio-alba.herokuapp.com/proyecto/"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectoURL+'list');
  }

  public detail(id:number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyectoURL+ `detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post(this.proyectoURL+"create",proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    proyecto.id = id;
    return this.httpClient.put(this.proyectoURL+'update', proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proyectoURL+`delete/${id}`);
  }
}
