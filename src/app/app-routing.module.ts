import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { AboutComponent } from './main-app/about/about.component';
import { HomepageComponent } from './main-app/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: MainAppComponent,children:[
    {path: 'about', component: AboutComponent, pathMatch: 'full'},
    {path: 'homepage', component: HomepageComponent, pathMatch: 'full'}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
