import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { HomeService } from 'src/app/service/home.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto : Proyecto = new Proyecto("","","");
  file: File = null;
  id: number;
  constructor(private proyectoService: ProyectoService, private dialogRef: MatDialogRef<EditProyectoComponent>, private homeService: HomeService) { }

  ngOnInit(): void {
    this.proyectoService.detail(this.id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        console.log("Error al actualizar");
        console.log(err);

      }
    )
  }

  onUpdate(): void {
    this.proyectoService.update(this.id,this.proyecto, this.file).subscribe(
      data => {
        this.homeService.recargarProyecto();
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

  capturarFile(event: any): any {
    this.file = event.target.files[0];
  }
}
