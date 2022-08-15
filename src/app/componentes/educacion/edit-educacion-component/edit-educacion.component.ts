import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = new Educacion("","","","");
  file: File = null;
  id: number;
  constructor(private eduService: EducacionService, public dialogRef: MatDialogRef<EditEducacionComponent>, private homeService: HomeService) { }

  ngOnInit(): void {
    this.eduService.detail(this.id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        console.log("Error al actualizar");
        console.log(err);
      }
    )
  }

  onUpdate(): void {
    this.eduService.update(this.id,this.educacion, this.file).subscribe(
      data => {
        this.homeService.recargarEducacion();
        this.dialogRef.close();
      }, err => {
        alert("Error al actualizar");
        console.log(err);
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
