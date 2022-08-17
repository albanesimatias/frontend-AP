import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  habilidad: Habilidad = new Habilidad("",0,"",);
  id: number;
  constructor(private habilidadService: HabilidadService, private dialogRef: MatDialogRef<EditHabilidadComponent>, private homeService: HomeService) { }
  
  ngOnInit(): void {
    this.habilidadService.detail(this.id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        console.log("Error al actualizar");
        console.log(err);
      }
    )
  }

  onUpdate(): void {
    this.habilidadService.update(this.id, this.habilidad).subscribe(
      data => {
        this.homeService.recargarHabilidades();
        this.dialogRef.close();
      }, err => {
        console.log("Error al actualizar");
        console.log(err);
        this.dialogRef.close();
      }
    )
  }

  cerrar():void{
    this.dialogRef.close();
  }
}
