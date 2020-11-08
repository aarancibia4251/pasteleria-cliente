import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  customerFormGroup: FormGroup;
  nameCustomerFormControl: FormControl;
  lastNameCustomerFormControl: FormControl;
  codeCustomerFormControl: FormControl;
  documentTypeCustomerFormControl: FormControl;
  documentNumberCustomerFormControl: FormControl;
  birthdayCustomerFormControl: FormControl;
  departmentCustomerFormControl: FormControl;
  provinceCustomerFormControl: FormControl;
  districtCustomerFormControl: FormControl;
  addressCustomerFormControl: FormControl;
  telephoneCustomerFormControl: FormControl;
  emailCustomerFormControl: FormControl;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  saveCustomer() {

  }

  goToList() {

  }

  createForm() {
    this.customerFormGroup = this.fb.group({
      nameCustomerFormControl: this.nameCustomerFormControl,
      lastNameCustomerFormControl: this.lastNameCustomerFormControl,
      codeCustomerFormControl: this.codeCustomerFormControl,
      documentTypeCustomerFormControl: this.documentTypeCustomerFormControl,
      documentNumberCustomerFormControl: this.documentNumberCustomerFormControl,
      birthdayCustomerFormControl: this.birthdayCustomerFormControl,
      departmentCustomerFormControl: this.departmentCustomerFormControl,
      provinceCustomerFormControl: this.provinceCustomerFormControl,
      districtCustomerFormControl: this.districtCustomerFormControl,
      addressCustomerFormControl: this.addressCustomerFormControl,
      telephoneCustomerFormControl: this.telephoneCustomerFormControl,
      emailCustomerFormControl: this.emailCustomerFormControl,
    });
  }

}
