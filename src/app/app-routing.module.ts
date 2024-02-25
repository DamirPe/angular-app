import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { AboutComponent } from './main-app/about/about.component';
import { HomepageComponent } from './main-app/homepage/homepage.component';
import { FormsComponent } from './main-app/forms/forms.component';
import { PipesComponent } from './main-app/pipes/pipes.component';
import { WorkoutLogComponent } from './main-app/workout-log/workout-log.component';

const routes: Routes = [
  {
    path: '', component: MainAppComponent,
    children:
    [
      {path: '', component: HomepageComponent, pathMatch: 'full'},
      {path: 'about', component: AboutComponent, pathMatch: 'full'},
      {path: 'forms', component: FormsComponent, pathMatch: 'full'},
      {path: 'pipes', component: PipesComponent, pathMatch: 'full'},
      {path: 'workout_log', component: WorkoutLogComponent, pathMatch: 'full'}
    ],
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
