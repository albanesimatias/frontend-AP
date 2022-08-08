import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {

  habilidad: Habilidad = new Habilidad("",0,"",);
  constructor(private habilidadService: HabilidadService, private actRouter: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.habilidadService.detail(id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        alert("Error al actualizar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.habilidadService.update(id,this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar");
        this.router.navigate(['']);
      }
    )
  }

}
