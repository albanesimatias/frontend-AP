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

  public save(habilidad: Habilidad, file: File): Observable<any>{
    const formData = new FormData();
    formData.append('file',file);
    formData.append('habilidad', JSON.stringify(habilidad));
    return this.httpClient.post(this.habilidadURL+"create",formData);
  }

  public update(id: number, habilidad: Habilidad, file: File): Observable<any>{
    if(file==null){
      var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
      file = new File(aFileParts,'no-update-foto');
    }
    const formData = new FormData();
    formData.append('id', ''+id);
    formData.append('habilidad', JSON.stringify(habilidad));
    formData.append('file',file);
    return this.httpClient.put(this.habilidadURL+'update', formData);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.habilidadURL+`delete/${id}`);
  }
}
