import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styleUrls: ['./create-seller.component.css']
})
export class CreateSellerComponent implements OnInit {
  sellerFormGroup: FormGroup;
  nameSellerFormControl: FormControl;
  lastNameSellerFormControl: FormControl;
  codeSellerFormControl: FormControl;
  entryDateSellerFormControl: FormControl;
  documentTypeSellerFormControl: FormControl;
  documentNumberSellerFormControl: FormControl;
  birthdaySellerFormControl: FormControl;
  departmentSellerFormControl: FormControl;
  provinceSellerFormControl: FormControl;
  districtSellerFormControl: FormControl;
  addressSellerFormControl: FormControl;
  telephoneSellerFormControl: FormControl;
  emailSellerFormControl: FormControl;
  usernameSellerFormControl: FormControl;
  passwordSellerFormControl: FormControl;
  validPasswordSellerFormControl: FormControl;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.nameSellerFormControl = new FormControl(null);
    this.lastNameSellerFormControl = new FormControl(null);
    this.codeSellerFormControl = new FormControl(null);
    this.entryDateSellerFormControl = new FormControl(null);
    this.documentTypeSellerFormControl = new FormControl(null);
    this.documentNumberSellerFormControl = new FormControl(null);
    this.birthdaySellerFormControl = new FormControl(null);
    this.departmentSellerFormControl = new FormControl(null);
    this.provinceSellerFormControl = new FormControl(null);
    this.districtSellerFormControl = new FormControl(null);
    this.addressSellerFormControl = new FormControl(null);
    this.telephoneSellerFormControl = new FormControl(null);
    this.emailSellerFormControl = new FormControl(null);
    this.usernameSellerFormControl = new FormControl(null);
    this.passwordSellerFormControl = new FormControl(null);
    this.validPasswordSellerFormControl = new FormControl(null);
    this.sellerFormGroup = this.fb.group({
      nameSellerFormControl: this.nameSellerFormControl,
      lastNameSellerFormControl: this.lastNameSellerFormControl,
      codeSellerFormControl: this.codeSellerFormControl,
      entryDateSellerFormControl: this.entryDateSellerFormControl,
      documentTypeSellerFormControl: this.documentTypeSellerFormControl,
      documentNumberSellerFormControl: this.documentNumberSellerFormControl,
      birthdaySellerFormControl: this.birthdaySellerFormControl,
      departmentSellerFormControl: this.departmentSellerFormControl,
      provinceSellerFormControl: this.provinceSellerFormControl,
      districtSellerFormControl: this.districtSellerFormControl,
      addressSellerFormControl: this.addressSellerFormControl,
      telephoneSellerFormControl: this.telephoneSellerFormControl,
      emailSellerFormControl: this.emailSellerFormControl,
      usernameSellerFormControl: this.usernameSellerFormControl,
      passwordSellerFormControl: this.passwordSellerFormControl,
      validPasswordSellerFormControl: this.validPasswordSellerFormControl,
    });
  }
}
