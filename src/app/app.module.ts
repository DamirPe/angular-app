import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { MainAppComponent } from './main-app/main-app.component';
import { HomepageComponent } from './main-app/homepage/homepage.component';
import { AboutComponent } from './main-app/about/about.component';
import { SharedService } from './shared.service';
import { FormsComponent } from './main-app/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainAppComponent,
    HomepageComponent,
    AboutComponent,
    FormsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
