import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.css'
})
export class MainAppComponent implements OnInit, OnDestroy {
  private themeSubscription: Subscription = new Subscription();
  theme: string;

  constructor(private sharedService: SharedService){
  }

  ngOnInit(){
    this.themeSubscription = this.sharedService.getMainAppTheme().subscribe
    ((data)=>{
      this.theme = data;
    })
  }

  ngOnDestroy(){
    this.themeSubscription.unsubscribe();
  }
}
