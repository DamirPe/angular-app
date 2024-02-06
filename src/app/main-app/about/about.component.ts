import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  accordion1 = ['test1', 'test1', 'test1', 'test1'];
  accordion2 = ['test2', 'test2', 'test2', 'test2'];
  accordion3 = ['test3', 'test3', 'test3', 'test3'];
  accordion4 = ['test4', 'test4', 'test4', 'test4'];
  
  acOpen = [false, false, false, false];

  onAc1(){
    for(let i = 0; i < this.acOpen.length; i++){
      if(i == 0){
        this.acOpen[i]=!this.acOpen[i];
      }else{
        this.acOpen[i]=false;
      }
    }
  }

  onAc2(){
    for(let i = 0; i < this.acOpen.length; i++){
      if(i == 1){
        this.acOpen[i]=!this.acOpen[i];
      }else{
        this.acOpen[i]=false;
      }
    }
  }

  onAc3(){
    for(let i = 0; i < this.acOpen.length; i++){
      if(i == 2){
        this.acOpen[i]=!this.acOpen[i];
      }else{
        this.acOpen[i]=false;
      }
    }
  }

  onAc4(){
    for(let i = 0; i < this.acOpen.length; i++){
      if(i == 3){
        this.acOpen[i]=!this.acOpen[i];
      }else{
        this.acOpen[i]=false;
      }
    }
  }

}
