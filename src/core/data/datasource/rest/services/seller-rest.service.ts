import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerRestService {
  private readonly baseUrl = environment.url;
  private readonly sellerUrl = this.baseUrl + 'seller';
  constructor(
    private httpClient: HttpClient
  ) { }

  getSellers(): Promise<any> {
    return new Promise<any>(((resolve, reject) => {
      this.httpClient.get(this.sellerUrl)
        .subscribe(res => resolve(res), error => reject(error));
    }));
  }

  createSeller(): Promise<any> {
    return new Promise<any>(((resolve, reject) => {
      this.httpClient.get(this.sellerUrl)
        .subscribe(res => resolve(res), error => reject(error));
    }));
  }
}
