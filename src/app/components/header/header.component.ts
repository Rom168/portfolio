
import { Component, OnInit } from '@angular/core';
import { NavigRoutes } from 'src/app/enum/routes';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})




export class HeaderComponent implements OnInit {

  expRoute:string = '';
  contactRoute:string = '';
  homeRoute: string = '';

  constructor() {
    this.expRoute = NavigRoutes.Experiences;
    this.contactRoute = NavigRoutes.Contact;
    this.homeRoute = NavigRoutes.Home;

   }

  ngOnInit() {
  }


}


