import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { HomeComponent } from './pages/home/home.component';
import {CareerComponent} from "./pages/career/career.component";
import {AboutComponent} from "./pages/about/about.component";
import {InterestComponent} from "./pages/interest/interest.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'experiences',
    component: ExperiencesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'about',
    component : AboutComponent
  },
  {
    path: 'interests',
    component: InterestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
