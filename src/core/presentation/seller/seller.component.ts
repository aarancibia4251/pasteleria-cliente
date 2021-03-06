import { Component, OnInit } from '@angular/core';
import {Seller} from '../../domain/model/seller';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {LoadingService} from '../../../commons/services/loading/loading.service';
import {Router} from '@angular/router';
import {Strings} from '../../../commons/utils/Strings';
import {SellerController} from '../../domain/controller/seller.controller';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  title = Strings.SELLER.TITLE;
  listOfData: Array<Seller> = [
    {
      idSeller: '43534534534',
      documentSeller:'32423432',
      nameSeller: 'dfsdfsdfsd'
    }
  ];
  sellerFormGroup: FormGroup;
  nameFormControl: FormControl;
  nroDocFormControl: FormControl;
  constructor(
    private fb: FormBuilder,
    private loadingSrv: LoadingService,
    private router: Router,
    private sellerCtrl: SellerController,
  ) { }

  ngOnInit(): void {
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

  searchSeller(value, type) {
    console.log(value, type);
  }

  goToEdit(idSeller: string) {
    this.router.navigateByUrl(`seller/editar/${idSeller}`);
  }

  cleanFields() {
    this.nameFormControl.setValue('');
    this.nroDocFormControl.setValue('');
    this.getNameInput('');
    this.getNroDocInput('');
  }

  private createForm() {
    this.nameFormControl = new FormControl(null);
    this.nroDocFormControl = new FormControl(null);
    this.sellerFormGroup = this.fb.group({
      nameFormControl: this.nameFormControl,
      nroDocFormControl: this.nroDocFormControl
    });
  }

}
