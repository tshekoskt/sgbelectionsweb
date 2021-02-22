import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.scss']
})
export class UserManagementTableComponent implements OnInit {

  table: any[] = [
    {
      name: "Timothy Mabina",
      idNumber: "9001234455089",
      email: "user@mail.com",
      district: "District 1",
      school: "Lefofa Primary School",
      cellphoneNumber: "0123456789"
    },
    {
      name: "Tshepo Mmutlwane",
      idNumber: "8001234455089",
      email: "user@mail.com",
      district: "District 2",
      school: "Ratshepo Secondary School",
      cellphoneNumber: "0122456789"
    },
    {
      name: "Karabo Letsoko",
      idNumber: "7001234455089",
      email: "user@mail.com",
      district: "District 2",
      school: "P.H.L Moraka Secondary School",
      cellphoneNumber: "0127656789"
    },
    {
      name: "Duduzile Nkomo",
      idNumber: "6001234455089",
      email: "user@mail.com",
      district: "District 2",
      school: "Mosaledi Primary School",
      cellphoneNumber: "0123456888"
    },
    {
      name: "Grace Matimela",
      idNumber: "5001234455089",
      email: "user@mail.com",
      district: "District 1",
      school: "Botshepo Secondary School",
      cellphoneNumber: "0123456123"
    },
    {
      name: "Timothy Mabina",
      idNumber: "4001234455089",
      email: "user@mail.com",
      district: "District 1",
      school: "Tsebentlha Secondary School",
      cellphoneNumber: "0123456781"
    },
    {
      name: "Tshepo Mmutlwane",
      idNumber: "3001234455089",
      email: "user@mail.com",
      district: "District 4",
      school: "Madisong Primary School",
      cellphoneNumber: "0122456723"
    },
    {
      name: "Karabo Letsoko",
      idNumber: "7001234455089",
      email: "user@mail.com",
      district: "District 3",
      school: "St. Camilus Primary School",
      cellphoneNumber: "0127656735"
    },
    {
      name: "Duduzile Nkomo",
      idNumber: "6005334455089",
      email: "user@mail.com",
      district: "District 7",
      school: "Mamotse Primary School",
      cellphoneNumber: "0123456811"
    },
    {
      name: "Grace Matimela",
      idNumber: "9012134455089",
      email: "user@mail.com",
      district: "District 1",
      school: "Makgatse Secondary School",
      cellphoneNumber: "0123456191"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }


  view(index){
    console.log(index)
  }

  onSelectionChanged = (event) => {
    if(event.oldRange == null) {
      this.onFocus();
    }
    if(event.range == null) {
      this.onBlur();
    }
  }

  onContentChanged = (event) => {
    // console.log(event.html);
  }

  onFocus = () => {
    console.log("On Focus");
  }
  onBlur = () => {
    console.log("Blurred");
  }


  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
