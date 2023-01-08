import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ErrorModel } from '../models/error.model';
import { Producto } from '../models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private errors: ErrorModel[] = [];
  private myErrors = new BehaviorSubject<ErrorModel[]>([]);

  myErrors$ = this.myErrors.asObservable();

  constructor() { }

  sendAlerts(errors: ErrorModel[]){
    this.errors = errors;
    console.log(errors);
    this.myErrors.next(this.errors);
  }
}
