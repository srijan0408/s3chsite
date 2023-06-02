import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ServicesComponent } from './services/services.component';
import { CourseComponent } from './course/course.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { component: HomeComponent, path: "" },
 
  { component: ServicesComponent, path: "services" },
  { component: TeamsComponent, path: "team" },
  { component: ContactusComponent, path: "contactus" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
