import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = new Educacion("","","","");
  constructor(private eduService: EducacionService, private actRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.eduService.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al actualizar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.eduService.update(id,this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar");
        this.router.navigate(['']);
      }
    )
  }

}
