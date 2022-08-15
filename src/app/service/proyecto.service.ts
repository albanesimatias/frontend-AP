import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  proyectoURL = "http://localhost:8080/proyecto/";
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectoURL+'list');
  }

  public detail(id:number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyectoURL+ `detail/${id}`);
  }

  public save(proyecto: Proyecto, file: File): Observable<any>{
    const formData = new FormData();
    formData.append('file',file);
    formData.append('proyecto', JSON.stringify(proyecto));
    return this.httpClient.post(this.proyectoURL+"create",formData);
  }

  public update(id: number, proyecto: Proyecto, file: File): Observable<any>{
    if(file==null){
      var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
      file = new File(aFileParts,'no-update-foto');
    }
    const formData = new FormData();
    formData.append('id', ''+id);
    formData.append('proyecto', JSON.stringify(proyecto));
    formData.append('file',file);
    return this.httpClient.put(this.proyectoURL+'update', formData);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proyectoURL+`delete/${id}`);
  }
}
