import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {LoadingService} from '../../../commons/services/loading/loading.service';
import {Router} from '@angular/router';
import {Strings} from '../../../commons/utils/Strings';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  title = Strings.CUSTOMER.TITLE;
  customerFormGroup: FormGroup;
  nameFormControl: FormControl;
  nroDocFormControl: FormControl;
  customers;
  constructor(
    private fb: FormBuilder,
    private loadingSrv: LoadingService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  getNameInput(inputName: string) {
    if (inputName.length > 0) {
      this.nroDocFormControl.disable({onlySelf: true});
    } else {
      this.nroDocFormControl.enable({onlySelf: true});
    }
  }

  getNroDocInput(inputNroDoc: string) {
    if (inputNroDoc.length > 0) {
      this.nameFormControl.disable({onlySelf: true});
    } else {
      this.nameFormControl.enable({onlySelf: true});
    }
  }

  searchCustomer(value, type) {
    console.log(value, type);
  }

  private createForm() {
    this.nameFormControl = new FormControl(null);
    this.nroDocFormControl = new FormControl(null);
    this.customerFormGroup = this.fb.group({
      nameFormControl: this.nameFormControl,
      nroDocFormControl: this.nroDocFormControl
    });
  }
}
