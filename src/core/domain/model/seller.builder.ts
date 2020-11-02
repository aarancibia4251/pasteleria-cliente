import {Seller} from './seller';

export class SellerBuilder {
  private _idSeller: string;
  private _nameSeller: string;
  private _documentSeller: string;

  setIdSeller(value: string): SellerBuilder {
    this._idSeller = value;
    return this;
  }

  setNameSeller(value: string): SellerBuilder {
    this._nameSeller = value;
    return this;
  }

  setDocumentSeller(value: string): SellerBuilder {
    this._documentSeller = value;
    return this;
  }

  create(): Seller {
    return new Seller(
      this._idSeller,
      this._nameSeller,
      this._documentSeller,
    );
  }
}
