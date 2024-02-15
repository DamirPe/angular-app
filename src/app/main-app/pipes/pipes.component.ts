import { Component } from '@angular/core';
import * as data from '../../../assets/callingCodes.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {

  inputNumber: number;

  countryFlag: any;

  callingCodes = (data as any).default;;

  selectedCountry: { id: string, name: string };

  countryId: string;

  inputNumberStr: string;



  countries: { id: string, name: string, population: number }[] = [
    { id: "HR", name: "Croatia", population: 4089400 },
    { id: "BA", name: "Bosnia and Herzegovina", population: 3500000 },
    { id: "RS", name: "Serbia", population: 7057412 },
    { id: "ME", name: "Montenegro", population: 622359 }
  ];
  towns: { id: string, name: string, parentId: string, population: number }[] = [
    { id: "ZG", name: "Zagreb", parentId: "HR", population: 802762 },
    { id: "SP", name: "Split", parentId: "HR", population: 178102 },
    { id: "DB", name: "Dubrovnik", parentId: "HR", population: 28506 },
    { id: "SJ", name: "Sarajevo", parentId: "BA", population: 395133 },
    { id: "TZ", name: "Tuzla", parentId: "BA", population: 110979 },
    { id: "BJ", name: "Banja Luka", parentId: "BA", population: 199191 },
    { id: "BG", name: "Belgrade", parentId: "RS", population: 1233790 },
    { id: "NS", name: "Novi Sad", parentId: "RS", population: 341625 },
    { id: "NI", name: "Niš", parentId: "RS", population: 183164 },
    { id: "PG", name: "Podgorica", parentId: "ME", population: 204877 },
    { id: "BT", name: "Budva", parentId: "ME", population: 19760 },
    { id: "CB", name: "Cetinje", parentId: "ME", population: 14700 },
    { id: "RI", name: "Rijeka", parentId: "HR", population: 128624 },
    { id: "OS", name: "Osijek", parentId: "HR", population: 83496 },
    { id: "TV", name: "Travnik", parentId: "BA", population: 31404 },
    { id: "BIH", name: "Bihać", parentId: "BA", population: 45841 },
    { id: "MO", name: "Mostar", parentId: "BA", population: 113169 },
    { id: "NIK", name: "Nišić", parentId: "RS", population: 15864 },
    { id: "KR", name: "Kragujevac", parentId: "RS", population: 150835 },
    { id: "SOM", name: "Sombor", parentId: "RS", population: 47628 },
    { id: "HOT", name: "Herceg Novi", parentId: "ME", population: 23058 },
    { id: "TK", name: "Tivat", parentId: "ME", population: 14647 },
    { id: "HK", name: "Herceg Kovačević", parentId: "ME", population: 23058 },
    { id: "DGD", name: "Danilovgrad", parentId: "ME", population: 5844 },
    { id: "BJE", name: "Bijelo Polje", parentId: "ME", population: 46140 },
    { id: "PL", name: "Pljevlja", parentId: "ME", population: 30170 },
    { id: "BA", name: "Bar", parentId: "ME", population: 44274 }
  ];

  onFlagInput(){
    this.inputNumber = this.countryFlag;
    console.log(this.countryFlag);
  }

  noInputNumber(){
    this.inputNumberStr = String(this.inputNumber);
    const selectedCountry = this.callingCodes.find(callingCodes => this.inputNumberStr.startsWith(callingCodes.callingCodeId));
    this.inputNumber = selectedCountry ? selectedCountry.id : null;
  }
}
