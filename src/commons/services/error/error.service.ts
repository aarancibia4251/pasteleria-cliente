import {EventEmitter, Injectable} from '@angular/core';
import {NzModalRef, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(
    private nzModalSrv: NzModalService
  ) { }

  simpleError(title: string, content: string) {
    this.nzModalSrv.error({
      nzTitle: title,
      nzContent: content
    });
  }
}
