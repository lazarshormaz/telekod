import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable, of } from 'rxjs';
import { UserData } from 'src/app/shared/shared/home/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers:any;

  constructor(private http: HttpBaseService) { }

 //getDataFromService
  getCustomers(): Observable<UserData[]> {
    return this.http.get('/assets/data/telekodData.json')
  }



}
