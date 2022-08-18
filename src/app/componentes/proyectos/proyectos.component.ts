import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { AddProyectoComponent } from './add-proyecto-component/add-proyecto.component';
import { EditProyectoComponent } from './edit-proyecto-component/edit-proyecto.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = []
  isLogged = false;
  constructor(private proyectoService: ProyectoService, private tokenService: TokenService, private render2: Renderer2, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarProyectos()
    if(this.tokenService.getToken())
      this.isLogged = true;
    else
      this.isLogged = false;
  }

  cargarProyectos(): void {
    this.proyectoService.lista().subscribe(
      data => this.proyectos = data
    )
  }

  open_modal_addProyecto():void {
    const dialogRef = this.dialog.open(AddProyectoComponent,{maxWidth:'400px',width:'100%'});
    dialogRef.afterClosed().subscribe();
  }

  open_modal_editProyecto(id: number):void {
    const dialogRef = this.dialog.open(EditProyectoComponent,{maxWidth:'400px',width:'100%'},);
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed().subscribe();
  }

  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, {maxWidth:'300px', width: '100%'});
    dialogRef.afterClosed().subscribe(result => {
      if(id != undefined && result)
        this.proyectoService.delete(id).subscribe(data => {
          this.cargarProyectos();
        }, err => {
          alert("error al borrar id");
        });
    })
  }

}
