import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];
  isLogged = false;
  constructor(private eduService: EducacionService, private tokenService: TokenService) { }
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
}
