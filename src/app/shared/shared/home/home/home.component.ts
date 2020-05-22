import { Component, OnInit, ViewChild, ɵLocaleDataIndex } from '@angular/core';

import { CustomerService } from 'src/app/@core/services/customer.service';
import { Table } from 'primeng/table/table';
import * as moment from 'moment';
import { SortEvent } from 'primeng/api/sortevent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customers: UserData [] = []
  loading: boolean = true;
  sum: number;
  sumUsers: any;
  day: any;
  month: any;
  year: any;
  regularDate=this.month + this.day + this.year
  @ViewChild('dt') table: Table;
  myMoment: moment.Moment = moment("someDate");
  appointments:any;


  constructor(private customerService: CustomerService) {

   }

  ngOnInit(){
    console.log(moment)
    this.customerService.getCustomers().subscribe( data => {
      this.customers = data.map( x => {
        return {
        id:  x.id,
        first_name: x.first_name,
        last_name: x.last_name,
        address: x.address,
        date_of_birth: moment(moment(x.date_of_birth,'DD/MM/YYYY').format('MM/DD/YYYY')).format('YYYY/MM/DD'),
        payment: x.payment,

        }

      });
      this.loading = false;
      console.log(this.customers)
      this.calculateGroupTotal();
    })
  }



  calculateGroupTotal() {
    const sum = this.customers.filter(item => item.payment).map( x=> {
      return {
        pay: parseFloat(x.payment.replace('€',''))
      }
    })

    this.sumUsers = sum.reduce((sum, current) => sum + current.pay, 0);
}


}

export interface UserData {
  id: 2,
  first_name: string,
  last_name: string,
  address: string,
  date_of_birth: any,
  payment: string

}
