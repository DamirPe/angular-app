import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';
  private menuSubject: Subscription = new Subscription();
  menuOpened: boolean = false;

  constructor(private sharedService: SharedService) {}  
  
  ngOnInit() {
    this.menuSubject = this.sharedService.getMenuVisibility().subscribe((data)=>{
      this.menuOpened = data;
    });
  }

  ngOnDestroy() {
    this.menuSubject.unsubscribe();
  }
}
