import { Injectable } from '@angular/core';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {

  constructor(
    private nzModalSrv: NzModalService
  ) { }

  basicSuccess(title: string, content: string) {
    this.nzModalSrv.success({
      nzTitle: title,
      nzContent: content
    });
  }
}
