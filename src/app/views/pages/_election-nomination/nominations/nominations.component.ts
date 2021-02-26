import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Inject,
  Renderer2
} from '@angular/core';
import {
  DOCUMENT
} from '@angular/common';
import {
  Router
} from '@angular/router';
import Swal from 'sweetalert2';
import { ElectionsService } from '../../_SERVICE/elections.service';

@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.scss']
})
export class NominationsComponent implements OnInit {


  nominatedparents: any[] = [];

  selectedNominee;

  nominations;
  seconded;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    private _nominationService: ElectionsService
  ) {}

  ngOnInit(): void {

    this._nominationService.getProposedNominationsByEmisCode(700400139,5352).subscribe(res => {

      this.nominations = res;
    console.log(this.nominations);
    });

    this._nominationService[] = [
      {
        firstName: "Timothy Mabina",
        lastName: "Mabina"
      },
      {
        firstName: "Tshepo Mmutlwane",
        lastName: "TrMmutlwaneue"
      },
      {
        firstName: "Karabo Letsoko",
        lastName: "Letsoko"
      }
    ]

    this._nominationService.getNominationsToBeSecondedByEmisCode(700400139,5352).subscribe(sec => {

      this.seconded = sec;

    });
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

  nominate() {
    this.nominatedparents.push(this.selectedNominee);
    const index: number = this.nominations.indexOf(this.selectedNominee);
    if (index !== -1) {
      this.nominations.splice(index, 1);
    }
    console.log(this.selectedNominee);
  }

  confirmBox(name) {

    if (this.seconded.length == 0) {
      Swal.fire({
        title: 'Are you sure you want to nominate ' + name + '?',
        text: 'You will not be able to nominate anymore!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Nominate!',
        cancelButtonText: 'No, Do not nominate'
      }).then((result) => {
        if (result.value) {

          this.nominate();

          Swal.fire(
            'Confirmation!',
            name + ' has been nominated to be elected.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your nomination was cancelled',
            'error'
          )
        }
      })
    } else
      //this.selectedNominee = {};
      Swal.fire(
        'Already Nominated',
        'Your have already nominated',
        'error'
      )
  }

  markAsParentCompletedNomination(emisCode,parentId)
  {

  }

}
