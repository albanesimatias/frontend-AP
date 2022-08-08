import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-add-habilidad',
  templateUrl: './add-habilidad.component.html',
  styleUrls: ['./add-habilidad.component.css']
})
export class AddHabilidadComponent implements OnInit {

  nombre: string = "";
  porcentaje: number = 0;
  ruta: string = "";
  constructor(private habilidadService: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidad = new Habilidad(this.nombre, this.porcentaje, this.ruta);
    this.habilidadService.save(habilidad).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("fallo");
        this.router.navigate(['']);
      }
    );
  }

}
