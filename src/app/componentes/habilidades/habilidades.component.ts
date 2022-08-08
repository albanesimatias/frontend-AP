import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidad[] = []
  isLogged = false;
  constructor(private habilidadService: HabilidadService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarHabilidad()
    if(this.tokenService.getToken())
      this.isLogged = true;
    else
      this.isLogged = false;
  }

  cargarHabilidad(): void {
    this.habilidadService.lista().subscribe(
      data => this.habilidades = data
    )
  }

  delete(id:number){
    if(id != undefined)
      this.habilidadService.delete(id).subscribe(data => {
        this.cargarHabilidad();
      }, err => {
        alert("error al borrar id");
      });
  }

}
