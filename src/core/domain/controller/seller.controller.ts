import { Injectable } from '@angular/core';
import {Seller} from '../model/seller';
import {SellerRestService} from '../../data/datasource/rest/services/seller-rest.service';

@Injectable({
  providedIn: 'root'
})
export class SellerController {

  constructor(
    private sellerRestSrv: SellerRestService,
  ) { }

  getSellers(): Promise<Seller> {
    return null;
  }

  createSeller(): Promise<Seller> {
    return this.sellerRestSrv.createSeller();
  }
}
