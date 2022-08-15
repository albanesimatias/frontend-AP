import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  eduURL = "http://localhost:8080/educacion/";

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Educacion[]>{
      return this.httpClient.get<Educacion[]>(this.eduURL+'list');
  }
 
  public detail(id:number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduURL+ `detail/${id}`);
  }

  public save(educacion: Educacion, file: File): Observable<any>{
    const formData = new FormData();
    formData.append('file',file);
    formData.append('educacion', JSON.stringify(educacion));
    return this.httpClient.post(this.eduURL+"create",formData);
  }

  public update(id: number, educacion: Educacion, file: File): Observable<any>{
    if(file==null){
      var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
      file = new File(aFileParts,'no-update-foto');
    }
    const formData = new FormData();
    formData.append('id', ''+id);
    formData.append('educacion', JSON.stringify(educacion));
    formData.append('file',file);
    return this.httpClient.put<any>(this.eduURL+'update',formData);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL+`delete/${id}`);
  }
}
