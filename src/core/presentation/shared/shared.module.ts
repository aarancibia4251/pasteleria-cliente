import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultComponent } from './layout/consult/consult.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { LoadingComponent } from './loading/loading.component';
import { ValidationErrorComponent } from './validation-error/validation-error.component';

@NgModule({
  declarations: [ConsultComponent, LoadingComponent, ValidationErrorComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    ConsultComponent,
    LoadingComponent,
    NgZorroAntdModule,
    ValidationErrorComponent
  ]
})
export class SharedModule { }
