import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.scss']
})
export class NominationsComponent implements OnInit {


  parents: any[] = [
    {
      name: "Timothy Mabina",
      nominated: "True"
    },
    {
      name: "Tshepo Mmutlwane",
      nominated: "True"
    },
    {
      name: "Karabo Letsoko",
      nominated: "True"
    },
    {
      name: "Duduzile Nkomo",
      nominated: "True"
    },
    {
      name: "Grace Matimela",
      nominated: "True"
    },
    {
      name: "Tefo Mbina",
      nominated: "True"
    },
    {
      name: "Tunelo Mmutlwa",
      nominated: "True"
    },
    {
      name: "Karabo Nnete",
      nominated: "True"
    },
    {
      name: "Dudu Nkgomo",
      nominated: "True"
    },
    {
      name: "Goitsi Maime",
      nominated: "True"
    }
  ];


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  toggleSidebar(e) {
    e.preventDefault();
    //this.document.body.classList.toggle('sidebar-open');
  }


  onLogout(e) {
    e.preventDefault();
    localStorage.removeItem('isLoggedin');

    if (!localStorage.getItem('isLoggedin')) {
     // this.router.navigate(['/auth/login']);
    }
  }

}
