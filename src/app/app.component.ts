import { Component , Inject, PLATFORM_ID} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AppServerModule} from "./app.server.module";
import {isPlatformBrowser} from "@angular/common";
import {LanguageService} from "./services/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private languageService: LanguageService) { }
}
