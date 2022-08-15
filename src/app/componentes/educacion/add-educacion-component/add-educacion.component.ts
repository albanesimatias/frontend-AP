import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  institucion: string = "";
  titulo: string = "";
  descripcion: string = "";
  imagen: string = "";
  file: File;
  constructor(private eduService: EducacionService, public dialogRef: MatDialogRef<AddEducacionComponent>,
    private homeService: HomeService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.institucion, this.titulo, this.descripcion, this.imagen);
    this.eduService.save(edu, this.file).subscribe(
      data => {
        console.log("Educacion añadida");
        this.homeService.recargarEducacion();
        this.dialogRef.close();
      }, err => {
        alert("fallo");
        console.log(err);
      }
    );
  }

  cerrar():void{
    this.dialogRef.close();
  }

  capturarFile(event: any): any {
    this.file = event.target.files[0];
  }

}
