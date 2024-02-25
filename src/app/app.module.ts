import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { MainAppComponent } from './main-app/main-app.component';
import { HomepageComponent } from './main-app/homepage/homepage.component';
import { AboutComponent } from './main-app/about/about.component';
import { SharedService } from './Services/shared.service';
import { FormsComponent } from './main-app/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './main-app/pipes/pipes.component';
import { TownFilter } from './Pipes/town-filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkoutLogComponent } from './main-app/workout-log/workout-log.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainAppComponent,
    HomepageComponent,
    AboutComponent,
    FormsComponent,
    PipesComponent,
    TownFilter,
    SortPipe,
    WorkoutLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
