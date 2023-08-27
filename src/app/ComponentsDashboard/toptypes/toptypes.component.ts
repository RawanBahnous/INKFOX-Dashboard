import { Component, OnInit } from '@angular/core';
import { AuthusersService } from 'src/Services/authusers.service';
import { DataserviceService } from 'src/Services/dataservice.service';
import { OrdersService } from 'src/Services/orders.service';

@Component({
  selector: 'app-toptypes',
  templateUrl: './toptypes.component.html',
  styles: [
  ]
})
export class ToptypesComponent implements OnInit{
  typesLst:any;
  constructor(private dataServ:DataserviceService) {}
  ngOnInit(): void {
    this.typesLst = this.dataServ.getTypes().splice(0,3);
    console.log(this.typesLst);
  }

}
