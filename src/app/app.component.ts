import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './Services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';
  private menuSubject: Subscription = new Subscription();
  menuOpened: boolean = false;

  private themeSubscription: Subscription = new Subscription();
  theme: string;
  
  constructor(private sharedService: SharedService) {}  
  
  ngOnInit() {
    this.menuSubject = this.sharedService.getMenuVisibility().subscribe((data)=>{
      this.menuOpened = data;
    });
    this.themeSubscription = this.sharedService.themeColor$.subscribe(data=>{
      this.theme = data;
      console.log(data);
    })
  }

  ngOnDestroy() {
    this.menuSubject.unsubscribe();
    this.themeSubscription.unsubscribe();
  }
}
