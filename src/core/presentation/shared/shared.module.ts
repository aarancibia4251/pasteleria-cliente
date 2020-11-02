import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultComponent } from './layout/consult/consult.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [ConsultComponent, LoadingComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    ConsultComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
