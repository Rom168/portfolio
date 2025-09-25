import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  language='';
  constructor(private translate:TranslateService) {
    this.language = localStorage.getItem('language') || 'fr';
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }

  public useLanguage(language: string){

    this.translate.setDefaultLang(language);
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
