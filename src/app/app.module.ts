import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AngularFireModule} from "@angular/fire/compat";

import {AngularFireStorageModule} from "@angular/fire/compat/storage";

import {firebaseConfig} from "../environnement/environnement";
import {AboutComponent} from "./pages/about/about.component";
import {CareerComponent} from "./pages/career/career.component";
import {InterestComponent} from "./pages/interest/interest.component";
import {MatIconModule} from "@angular/material/icon";
import {FooterComponent} from "./components/footer/footer.component";


// Initialize Firebase

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperiencesComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    CareerComponent,
    InterestComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
