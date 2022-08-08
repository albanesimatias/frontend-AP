import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  habilidadURL = "http://localhost:8080/habilidad/";
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.habilidadURL+'list');
}

public detail(id:number): Observable<Habilidad>{
  return this.httpClient.get<Habilidad>(this.habilidadURL+ `detail/${id}`);
}

public save(habilidad: Habilidad): Observable<any>{
  return this.httpClient.post<any>(this.habilidadURL+"create",habilidad);
}

public update(id: number, habilidad: Habilidad): Observable<any>{
  return this.httpClient.put<any>(this.habilidadURL+`update/${id}`, habilidad);
}

public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.habilidadURL+`delete/${id}`);
}
}
