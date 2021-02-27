import {
  Component,
  OnInit} from '@angular/core';
import * as _ from 'lodash';
import {
  Router
} from '@angular/router';
import Swal from 'sweetalert2';
import {
  ElectionsService
} from '../../_SERVICE/elections.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.scss']
})
export class NominationsComponent implements OnInit {

  form: FormGroup;

  selectedNominee: any = {};

  selectedSeconder: any = {};

  blockB;

  blockA: any[] = [{
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
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _nominationService: ElectionsService
  ) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      blockAList: new FormArray([]),
      blockBList: new FormArray([])
    });

    //console.log(this.nominations);
    // this._nominationService.getProposedNominationsByEmisCode(700400139,5352).subscribe(res => {

    //   this.nominations = res;
    // console.log(this.nominations);
    // });

    this.blockA.forEach(() => {

      this.blockAFormArray.push(new FormControl(false));

    });


    this._nominationService.getNominationsToBeSecondedByEmisCode(700400139, 5352).subscribe(res => {

      this.blockB = res;

      this.blockB.forEach(() => {

        this.blockBFormArray.push(new FormControl(false));

      });

    });
  }

  get blockAFormArray() {
    console.log(this.form.controls.blockAList);
    return this.form.controls.blockAList as FormArray;

  }

  get blockBFormArray() {
    return this.form.controls.blockBList as FormArray;
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

  nominate(e) {

    if (e.target.checked) {
      
      this.selectedNominee.canBeSelected = true;
      this.blockBFormArray.push(new FormControl(false));
      
      
      this.blockB.push(this.selectedNominee);
      this.blockA.splice(e.target.value, 1);
    }

  }

  confirmBox(e) {

    if(_.isEmpty(this.selectedNominee)===false)
    {
        Swal.fire(
          'Already Nominated',
          'You have already nominated. To reset your selection, please click RESET button',
          'error'
        );

        return;
    }

    this.selectedNominee = this.blockA[e.target.value];
    const selectedNominatedParentName: string =  this.selectedNominee?.firstName + ' ' + this.selectedNominee?.lastName;

    Swal.fire({
      title: 'Are you sure you want to nominate ' + selectedNominatedParentName + '?',
      text: 'You will not be able to nominate anymore!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Nominate!',
      cancelButtonText: 'No, Do not nominate'
    }).then((result) => {
      if (result.value) {

        this.nominate(e);

        Swal.fire(
          'Confirmation!',
          selectedNominatedParentName + ' has been nominated to be elected.',
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

  }

  confirmSecondBox(e) {

    this.selectedSeconder = this.blockB[e.target.value];
    const selectedSecondedParentName: string =  this.selectedSeconder?.firstName + ' ' + this.selectedSeconder?.lastName;

    Swal.fire({
      title: 'Are you sure you want to second ' + selectedSecondedParentName + '?',
      text: 'You will not be able to second anymore!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Seconder!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

        Swal.fire(
          'Confirmation!',
          selectedSecondedParentName + ' has been seconded.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your seconding was cancelled',
          'error'
        )
      }
    })

  }

  removeNomination(e) {
      this.selectedNominee.canBeSelected = false;
      this.blockAFormArray.push(new FormControl(false));
      console.log(this.selectedNominee);
      this.blockA.push(this.selectedNominee);
      this.blockB.splice(e.target.value, 1);
  }

  saveChanges() {
    //emisCode,parentId
    //markAsParentCompletedNomination

    this.router.navigate(['/parentlanding']);
  }

}
