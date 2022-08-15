import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  constructor(private router:Router, private tokenService: TokenService, private render2: Renderer2, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
        this.isLogged = false;
    }
  }

  login(){
    const dialogRef = this.dialog.open(LoginComponent,{maxWidth:'300px',width:'100%'});
    dialogRef.afterClosed().subscribe();
  }

  logOut() {
    this.tokenService.logOut();
    window.location.reload();
  }
}
