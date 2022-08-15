import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeService } from 'src/app/service/home.service';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-edit-descripcion',
  templateUrl: './edit-descripcion.component.html',
  styleUrls: ['./edit-descripcion.component.css']
})
export class EditDescripcionComponent implements OnInit {

  descripcion: string = "";
  constructor(private perfilService: PerfilService, private dialogRef: MatDialogRef<EditDescripcionComponent>,private homeService: HomeService) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(
      data => {
        this.descripcion = data.descripcion;
      }, err => {
        alert("Error al actualizar");
      }
      )
    }
    
    onUpdate(): void {
    this.perfilService.update_descripcion(this.descripcion).subscribe(
      data => {
        console.log("Descripcion actualizada");
        this.homeService.recargaPerfil = !this.homeService.recargaPerfil;
        this.cerrar();
      }, err => {
        alert("No se puedo actualizar la descripcion");
      }
    )
  }

  cerrar():boolean{
    this.dialogRef.close();
    return false;
  }
}
