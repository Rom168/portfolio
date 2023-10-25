
import { Component, OnInit } from '@angular/core';
import { NavigRoutes } from 'src/app/enum/routes';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})




export class HeaderComponent implements OnInit {

  expRoute:string = '';
  contactRoute:string = '';
  homeRoute: string = '';
  careerRoute: string = '';
  aboutRoute: string ='';
  interestRoute: string ='';

  constructor() {
    this.expRoute = NavigRoutes.Experiences;
    this.contactRoute = NavigRoutes.Contact;
    this.homeRoute = NavigRoutes.Home;
    this.aboutRoute = NavigRoutes.About;
    this.careerRoute = NavigRoutes.Career;
    this.interestRoute = NavigRoutes.Interests;

   }

  ngOnInit() {
  }

  /**
   * changelanguage
   * @param {string} language
   */
  changeLanguage(language: string){

  }

}


