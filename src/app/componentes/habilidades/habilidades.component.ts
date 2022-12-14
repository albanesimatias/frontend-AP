import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { PaqueteService } from 'src/app/service/paquete.service';
import { TokenService } from 'src/app/service/token.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { AddHabilidadComponent } from './add-habilidad-component/add-habilidad.component';
import { EditHabilidadComponent } from './edit-habilidad-component/edit-habilidad.component';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidad[] = []
  isLogged = false;
  constructor(private habilidadService: HabilidadService, private paqueteService: PaqueteService, private tokenService: TokenService, private render2: Renderer2, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.paqueteService.getPaquete().subscribe(paquete => {
      this.habilidades = paquete.habilidades;
    });
    if(this.tokenService.getToken())
      this.isLogged = true;
    else
      this.isLogged = false;
  }

  cargarHabilidad(): void {
    this.habilidadService.lista().subscribe(
      data => this.habilidades = data
    )
  }

  open_modal_addHabilidad():void {
    const dialogRef = this.dialog.open(AddHabilidadComponent,{maxWidth:'400px',width:'100%'});
    dialogRef.afterClosed().subscribe();
  }

  open_modal_editHabilidad(id: number):void {
    const dialogRef = this.dialog.open(EditHabilidadComponent,{maxWidth:'400px',width:'100%'},);
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed().subscribe();
  }

  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, {maxWidth:'300px', width: '100%'});
    dialogRef.afterClosed().subscribe( result => {
      if(id != undefined && result)
        this.habilidadService.delete(id).subscribe(data => {
          this.cargarHabilidad();
        }, err => {
          alert("error al borrar id");
        });
    })
  }

}
