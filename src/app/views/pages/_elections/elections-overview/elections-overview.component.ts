import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-elections-overview',
  templateUrl: './elections-overview.component.html',
  styleUrls: ['./elections-overview.component.scss']
})
export class ElectionsOverviewComponent implements OnInit {

  htmlText = "";

  constructor() { }


  ngOnInit(): void {

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

}

