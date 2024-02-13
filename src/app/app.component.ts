import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate:TranslateService) {
    const language = localStorage.getItem('language') || 'fr';
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

  public useLanguage(language: string){

    this.translate.setDefaultLang(language);
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
