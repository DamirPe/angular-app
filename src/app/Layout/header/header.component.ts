import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../Services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() myEvent =new EventEmitter<string>();

  constructor(private sharedService: SharedService){}

  toggleMenu(){
    this.sharedService.toggleMenu();
  }
}
