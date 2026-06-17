
import { Component, OnInit } from '@angular/core';
import { NavigRoutes } from 'src/app/enum/routes';
import {TranslateService} from "@ngx-translate/core";
import {AppComponent} from "../../app.component";
import {LanguageService} from "../../services/language.service";



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


  constructor(private languageService : LanguageService) {
    this.expRoute = NavigRoutes.Experiences;
    this.contactRoute = NavigRoutes.Contact;
    this.homeRoute = NavigRoutes.Home;
    this.aboutRoute = NavigRoutes.About;
    this.careerRoute = NavigRoutes.Career;
    this.interestRoute = NavigRoutes.Interests;

   }

  ngOnInit() {
  }

  get currentLanguage(): string {
    return this.languageService.currentLanguage;
  }

  changeLanguage(language: string): void {
    this.languageService.useLanguage(language);
  }

  get languageButtonContent(): string {
    return this.currentLanguage === 'en'
      ? '<i class="fas fa-globe"></i> English'
      : '<i class="fas fa-globe"></i> Français';
  }


}


