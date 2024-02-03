import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy{
  private menuSubject: Subscription = new Subscription();
  isMenuVisible: boolean = false;

 constructor(private sharedService: SharedService){}

 ngOnInit(){
  this.menuSubject = this.sharedService.getMenuVisibility().subscribe((data)=>{
    this.isMenuVisible = data;
  })
 }

 ngOnDestroy(){
  this.menuSubject.unsubscribe();
}

}
