import { Component, inject, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  isLoading : boolean = false;

loaderService = inject(LoaderService);

ngOnInit(): void {
  this.loaderService.loaderObs$
  .subscribe((res : boolean) => {
    this.isLoading = res;
  })
}

}
