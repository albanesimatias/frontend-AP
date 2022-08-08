import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  institucion: string = "";
  titulo: string = "";
  descripcion: string = "";
  ruta: string = "";
  constructor(private eduService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.institucion, this.titulo, this.descripcion, this.ruta);
    this.eduService.save(edu).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("fallo");
        this.router.navigate(['']);
      }
    );
  }

}
