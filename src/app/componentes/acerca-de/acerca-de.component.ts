import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { TokenService } from 'src/app/service/token.service';
import { EditFotoComponent } from './edit-foto-component/edit-foto.component';
import { PerfilService } from 'src/app/service/perfil.service';
import { MatDialog } from '@angular/material/dialog';
import { EditNombreComponent } from './edit-nombre-component/edit-nombre.component';
import { EditDescripcionComponent } from './edit-descripcion-component/edit-descripcion.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PaqueteService } from 'src/app/service/paquete.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  @ViewChild('asDescripcion') refDescripcion: ElementRef;
  perfil: Perfil = new Perfil("","","");
  isLogged = false;
  constructor(private dialog: MatDialog,private perfilService: PerfilService, private paqueteService: PaqueteService,private tokenService: TokenService,
     private render2: Renderer2, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.paqueteService.getPaquete().subscribe(paquete => {
      this.perfil = paquete.perfil;
      this.perfil.descripcion = this.perfil.descripcion.replace(/(\r\n|\n|\r)/gm, "<br>")
      this.render2.setProperty(this.refDescripcion.nativeElement,'innerHTML',this.perfil.descripcion);
    });

    if(this.tokenService.getToken())
    this.isLogged = true;
    else
    this.isLogged = false;
  }
  
  cargarPerfil():void {
    this.perfilService.getPerfil().subscribe(data => {
      this.perfil = data;
      this.perfil.descripcion = this.perfil.descripcion.replace(/(\r\n|\n|\r)/gm, "<br>")
      this.render2.setProperty(this.refDescripcion.nativeElement,'innerHTML',this.perfil.descripcion);
    });
  }

  open_modal_foto():void {
    const dialogRef = this.dialog.open(EditFotoComponent,{maxWidth:'350px',width:'100%'});
    dialogRef.afterClosed().subscribe();
  }

  open_modal_nombre():void {
    const dialogRef = this.dialog.open(EditNombreComponent,{});
    dialogRef.afterClosed().subscribe();
  }

  open_modal_descripcion():void {
    const dialogRef = this.dialog.open(EditDescripcionComponent,{maxWidth:'500px', width:'100%'});
    dialogRef.afterClosed().subscribe();
  }

  /*sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }*/
}
