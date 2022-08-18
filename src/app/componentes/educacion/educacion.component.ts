import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { AddEducacionComponent } from './add-educacion-component/add-educacion.component';
import { EditEducacionComponent } from './edit-educacion-component/edit-educacion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];
  isLogged = false;
  constructor(private eduService: EducacionService, private tokenService: TokenService, private render2: Renderer2, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.cargarEducacion()
    if(this.tokenService.getToken())
      this.isLogged = true;
    else
      this.isLogged = false;
  }

  cargarEducacion(): void {
    this.eduService.lista().subscribe(
      data => this.edu = data
    )
  }

  open_modal_addEdu():void {
    const dialogRef = this.dialog.open(AddEducacionComponent,{maxWidth:'400px',width:'100%'});
    dialogRef.afterClosed().subscribe();
  }

  open_modal_editEdu(id: number):void {
    const dialogRef = this.dialog.open(EditEducacionComponent,{maxWidth:'400px',width:'100%'},);
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed().subscribe();
  }

  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, {maxWidth:'300px', width: '100%'});
    dialogRef.afterClosed().subscribe(result => {
      if(id != undefined && result)
        this.eduService.delete(id).subscribe(data => {
          this.cargarEducacion();
        }, err => {
          alert("error al borrar id");
        });
    })
  }
}
