import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaqueteDTO } from '../model/paquete-dto';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {
  //Local
  //paqueteURL = "http://localhost:8080/paquete/get";
  //Remoto heroku
  paqueteURL = "https://backend-portfolio-alba.herokuapp.com/paquete/get";
  
  constructor(private httpCliente: HttpClient) {}
  
  getPaquete(): Observable<PaqueteDTO>{
    return this.httpCliente.get<PaqueteDTO>(this.paqueteURL);
  }
}
