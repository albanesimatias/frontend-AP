import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-add-habilidad',
  templateUrl: './add-habilidad.component.html',
  styleUrls: ['./add-habilidad.component.css']
})
export class AddHabilidadComponent implements OnInit {

  nombre: string = "";
  porcentaje: number = 0;
  imagen: string = "";

  constructor(private habilidadService: HabilidadService,  public dialogRef: MatDialogRef<AddHabilidadComponent>,private homeService: HomeService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidad = new Habilidad(this.nombre, this.porcentaje, this.imagen);
    this.habilidadService.save(habilidad).subscribe(
      data => {
        console.log("Habilidad añadida");
        this.homeService.recargarHabilidades();
        this.dialogRef.close();
      }, err => {
        alert("Asegurese de completar los campos");
      }
    );
  }

  cerrar():void{
    this.dialogRef.close();
  }
}
