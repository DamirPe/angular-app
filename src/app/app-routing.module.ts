import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { AboutComponent } from './main-app/about/about.component';
import { HomepageComponent } from './main-app/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, children:[
    {path: 'about', component: AboutComponent},
    { path: "**", redirectTo: "" },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
