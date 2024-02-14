import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  selectedCountry: { id: string, name: string };

  countries: { id: string, name: string }[] = [
    { id: "HR", name: "Croatia" },
    { id: "BA", name: "Bosnia and Herzegovina" },
    { id: "RS", name: "Serbia" },
    { id: "ME", name: "Montenegro" }
  ];
  towns: { id: string, name: string, parentId: string }[] = [
    { id: "ZG", name: "Zagreb", parentId: "HR" },
    { id: "SP", name: "Split", parentId: "HR" },
    { id: "DB", name: "Dubrovnik", parentId: "HR" },
    { id: "SJ", name: "Sarajevo", parentId: "BA" },
    { id: "TZ", name: "Tuzla", parentId: "BA" },
    { id: "BJ", name: "Banja Luka", parentId: "BA" },
    { id: "BG", name: "Belgrade", parentId: "RS" },
    { id: "NS", name: "Novi Sad", parentId: "RS" },
    { id: "NI", name: "Niš", parentId: "RS" },
    { id: "PG", name: "Podgorica", parentId: "ME" },
    { id: "BT", name: "Budva", parentId: "ME" },
    { id: "CB", name: "Cetinje", parentId: "ME" },
    { id: "DBV", name: "Dubrovnik", parentId: "HR" },
    { id: "RI", name: "Rijeka", parentId: "HR" },
    { id: "OS", name: "Osijek", parentId: "HR" },
    { id: "TV", name: "Travnik", parentId: "BA" },
    { id: "BIH", name: "Bihać", parentId: "BA" },
    { id: "MO", name: "Mostar", parentId: "BA" },
    { id: "NIK", name: "Nišić", parentId: "RS" },
    { id: "KR", name: "Kragujevac", parentId: "RS" },
    { id: "SOM", name: "Sombor", parentId: "RS" },
    { id: "HOT", name: "Herceg Novi", parentId: "ME" },
    { id: "TK", name: "Tivat", parentId: "ME" },
    { id: "BDO", name: "Budva", parentId: "ME" },
    { id: "HK", name: "Herceg Kovačević", parentId: "ME" },
    { id: "DGD", name: "Danilovgrad", parentId: "ME" },
    { id: "BJE", name: "Bijelo Polje", parentId: "ME" },
    { id: "PL", name: "Pljevlja", parentId: "ME" },
    { id: "BA", name: "Bar", parentId: "ME" }
  ];

  onSelectChange(selectedElement: any){
    const selectedId = selectedElement;
    console.log(selectedId);
  }
}
