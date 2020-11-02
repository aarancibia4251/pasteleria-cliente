import { Component, OnInit } from '@angular/core';
import {LoadingService} from '../../../../commons/services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  isLoading = this.loadingSrv.loading;
  constructor(
    private loadingSrv: LoadingService,
  ) { }

  ngOnInit(): void {
  }

}
