import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeService: HomeService;
  constructor(homeService: HomeService) {
    this.homeService = homeService;
  }
  
  ngOnInit(): void {
    
  }

}
