import { Component, OnInit } from '@angular/core';
import { AuthusersService } from 'src/Services/authusers.service';
import { DataserviceService } from 'src/Services/dataservice.service';
import { OrdersService } from 'src/Services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  mangaLength:any;
  typeLength:any;
  usersLength:any;
  ordersArr:any;
  speordersArr:any;
  constructor(private dataServ:DataserviceService,private Usrs:AuthusersService,private orderServ:OrdersService) {}
  ngOnInit(): void {
    this.mangaLength = this.dataServ.mangaList.length;
    console.log(this.mangaLength);
    this.typeLength = this.dataServ.typesList.length;
    console.log(this.typeLength);
    this.usersLength = this.Usrs.users.length;
    console.log(this.usersLength);

    // to get all orders
    this.ordersArr = this.orderServ.getAllOrders();
    console.log(this.ordersArr);
    // to get all special orders
    this.speordersArr = this.orderServ.getSpecOrder();
    console.log(this.speordersArr);
  }



  removeAllSpecial(){
    // this.speordersArr = this.orderServ.getSpecOrder().length;
    // console.log(this.speordersArr);

  }
  removeAll(){
    // this.ordersArr = this.orderServ.getAllOrders().length;
    // console.log(this.ordersArr);
  }





}
