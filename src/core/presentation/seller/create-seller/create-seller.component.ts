import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Helpers} from '../../../../commons/utils/Helpers';
import {ErrorService} from '../../../../commons/services/error/error.service';
import {SellerController} from '../../../domain/controller/seller.controller';
import {SellerBuilder} from '../../../domain/model/seller.builder';
import {CustomValidators} from '../../../../commons/utils/Validators';
import {from, merge} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styleUrls: ['./create-seller.component.scss']
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
  idSeller: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private errorSrv: ErrorService,
    private sellerCtrl: SellerController,
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.idSeller = params.id;
      }
    });
  }

  ngOnInit(): void {
    this.createForm();
    if (this.idSeller) {
      this.setFormValues();
    }
    this.listenValues();
  }

  listenValues() {
    const nameObs = this.nameSellerFormControl.valueChanges;
    const lastNameObs = this.lastNameSellerFormControl.valueChanges;
    merge(nameObs, lastNameObs)
      .subscribe(
        value => {
          if (this.nameSellerFormControl.value && this.lastNameSellerFormControl.value) {
            const arrayLastName = this.lastNameSellerFormControl.value.split(' ');
            const userName = (this.nameSellerFormControl.value as string).slice(0, 1) + arrayLastName[0];
            this.usernameSellerFormControl.setValue(userName);
          } else {
            this.usernameSellerFormControl.setValue(null);
          }
        }
      );
  }

  async saveSeller() {
    if (this.sellerFormGroup.invalid) {
      Helpers.validaAllFormFields(this.sellerFormGroup);
      this.errorSrv.simpleError('Vendedor', 'Hubo un error');
      return;
    }

    console.log(this.sellerFormGroup.controls.nameSellerFormControl);
    this.sellerCtrl.createSeller();
  }

  goToList() {
    this.router.navigateByUrl('/seller');
  }

  setFormValues() {
    this.codeSellerFormControl.setValue(this.idSeller);
  }

  private createSellerModel() {
    return new SellerBuilder()
      .create();
  }

  private createForm() {
    this.nameSellerFormControl = new FormControl(null, [Validators.required]);
    this.lastNameSellerFormControl = new FormControl(null, [Validators.required]);
    this.codeSellerFormControl = new FormControl({ value: null, disabled: true }, [Validators.required]);
    this.entryDateSellerFormControl = new FormControl(null);
    this.documentTypeSellerFormControl = new FormControl(null);
    this.documentNumberSellerFormControl = new FormControl(null);
    this.birthdaySellerFormControl = new FormControl(null);
    this.departmentSellerFormControl = new FormControl(null);
    this.provinceSellerFormControl = new FormControl(null);
    this.districtSellerFormControl = new FormControl(null);
    this.addressSellerFormControl = new FormControl(null);
    this.telephoneSellerFormControl = new FormControl(null);
    this.emailSellerFormControl = new FormControl(null, [Validators.email]);
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
    }, {
      validators: CustomValidators.confirmPassword('passwordSellerFormControl', 'validPasswordSellerFormControl'),
    });
  }
}
