import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getItem(key: string): Promise<any> {
    return new Promise<any>(((resolve, reject) => {
      const item = localStorage.getItem(key);
      if (item) {
        resolve(JSON.parse(item));
      } else {
        reject();
      }
    }));
  }

  setItem(key: string, value: any): Promise<any> {
    return new Promise<any>(((resolve, reject) => {
      if (key && value) {
        localStorage.setItem(key, JSON.stringify(value));
        resolve();
      } else {
        reject();
      }
    }));
  }
}
