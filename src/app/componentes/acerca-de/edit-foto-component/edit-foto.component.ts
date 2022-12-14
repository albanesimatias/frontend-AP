import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/service/perfil.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-edit-foto',
  templateUrl: './edit-foto.component.html',
  styleUrls: ['./edit-foto.component.css']
})
export class EditFotoComponent implements OnInit {

  perfil: Perfil = new Perfil("","","");
  imagen : string;
  constructor(private perfilService: PerfilService,  private router: Router, public dialogRef: MatDialogRef<EditFotoComponent>,
               private homeService: HomeService) {}

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(
      data => {
        this.perfil = data;
      }, err => {
        console.log("Error al actualizar");
      }
    )
  }

  onUpdate(): void {
    this.perfilService.subir_foto(this.imagen).subscribe(
      data => {
        console.log("Foto actualizada");
        this.homeService.recargaPerfil = !this.homeService.recargaPerfil;
        this.cerrar();
      }, err => {
        console.log("Error al actualizar foto");
      }
    )
  }

  cerrar():boolean{
    this.dialogRef.close();
    return false;
  }
}
