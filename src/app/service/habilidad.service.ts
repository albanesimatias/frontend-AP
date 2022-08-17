import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  //Local
  habilidadURL = "http://localhost:8080/habilidad/";

  //Remoto heroku
  //habilidadURL = "https://backend-portfolio-alba.herokuapp.com/habilidad/"
  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Habilidad[]>{
      return this.httpClient.get<Habilidad[]>(this.habilidadURL+'list');
  }

  public detail(id:number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.habilidadURL+ `detail/${id}`);
  }

  public save(habilidad: Habilidad): Observable<any>{
    return this.httpClient.post(this.habilidadURL+"create",habilidad);
  }

  public update(id: number, habilidad: Habilidad): Observable<any>{
    habilidad.id = id;
    return this.httpClient.put(this.habilidadURL+'update', habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.habilidadURL+`delete/${id}`);
  }
}
