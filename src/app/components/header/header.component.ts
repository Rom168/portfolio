
import { Component, OnInit } from '@angular/core';
import { NavigRoutes } from 'src/app/enum/routes';
import {TranslateService} from "@ngx-translate/core";
import {AppComponent} from "../../app.component";



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

  currentLanguage: string ='';

  constructor(private translate: TranslateService, private app: AppComponent) {
    this.expRoute = NavigRoutes.Experiences;
    this.contactRoute = NavigRoutes.Contact;
    this.homeRoute = NavigRoutes.Home;
    this.aboutRoute = NavigRoutes.About;
    this.careerRoute = NavigRoutes.Career;
    this.interestRoute = NavigRoutes.Interests;

    this.currentLanguage = app.language;

   }

  ngOnInit() {
  }

  /**
   * changelanguage
   * @param {string} language
   */
  changeLanguage(language: string){
    //this.translate.use(language);
    //this.translate.setDefaultLang(language);

    this.app.useLanguage(language);
  }

  get languageButtonText(): string {

    return this.currentLanguage === 'en' ? 'Language' : 'Langue';
  }

  get languageButtonContent(): string {
    if (this.currentLanguage === 'en') {
      return '<i class="fas fa-globe"></i> English';
    } else {
      return '<i class="fas fa-globe"></i> Français';
    }
  }


}


