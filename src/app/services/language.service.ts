import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage: string = 'en';

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.currentLanguage = localStorage.getItem('language') || 'en';
    }
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  useLanguage(language: string): void {
    this.currentLanguage = language;
    this.translate.setDefaultLang(language);
    this.translate.use(language);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', language);
    }
  }
}
