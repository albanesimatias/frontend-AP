import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Proyecto } from 'src/app/model/proyecto';
import { HomeService } from 'src/app/service/home.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

  nombre: string = "";
  imagen: string = "";
  githublink: string = "";
  constructor(private proyectoService: ProyectoService, public dialogRef: MatDialogRef<AddProyectoComponent>,private homeService: HomeService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombre, this.imagen, this.githublink);
    this.proyectoService.save(proyecto).subscribe(
      data => {
        console.log("Proyecto añadido");
        this.homeService.recargarProyecto();
        this.dialogRef.close();
      }, err => {
        console.log("fallo");
        console.log(err);
      }
    );
  }

  cerrar():void{
    this.dialogRef.close();
  }
}
