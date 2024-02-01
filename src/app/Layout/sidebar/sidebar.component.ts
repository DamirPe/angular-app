import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy{
  private subjekat: Subscription;
  visabilityOfDiv: boolean = false;

 constructor(private sharedService: SharedService){}

 ngOnInit(){
  this.subjekat = this.sharedService.getMenuVisibility().subscribe((data)={
    this.visabilityOfDiv = data;
  })

  ngOnDestroy(){
    this.subjekat.unsubscribe();
  }
 }

}
