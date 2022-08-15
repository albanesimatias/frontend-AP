import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeService } from 'src/app/service/home.service';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-edit-nombre',
  templateUrl: './edit-nombre.component.html',
  styleUrls: ['./edit-nombre.component.css']
})
export class EditNombreComponent implements OnInit {

  nombre :string = "";
  constructor(private perfilService: PerfilService, private dialogRef: MatDialogRef<EditNombreComponent>, private homeService: HomeService) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(
      data => {
        this.nombre = data.nombre;
      }, err => {
        alert("Error al actualizar");
      }
    )
  }

  onUpdate(): void {
    console.log("Nombre actualizado");
    this.perfilService.update_nombre(this.nombre).subscribe(
      data => {
        this.homeService.recargaPerfil = !this.homeService.recargaPerfil;
        this.cerrar();
      }, err => {
        alert("No se puedo actualizar el nombre");
      }
    )
  }

  cerrar():boolean{
    this.dialogRef.close();
    return false;
  }
}
