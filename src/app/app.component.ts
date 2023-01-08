import { Component, OnInit } from '@angular/core';
import { ErrorModel } from './models/error.model';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pt-id';
  errors: ErrorModel[] = [];
  constructor(
    private storeService:StoreService
  ){}

  ngOnInit() : void{
    this.storeService.myErrors$.subscribe(errors=>{
      this.errors = errors;
    });
  }
}
