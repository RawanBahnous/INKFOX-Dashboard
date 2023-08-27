import { Component, OnInit } from '@angular/core';
import { AuthusersService } from 'src/Services/authusers.service';
import { DataserviceService } from 'src/Services/dataservice.service';
import { OrdersService } from 'src/Services/orders.service';


@Component({
  selector: 'app-topmanga',
  templateUrl: './topmanga.component.html',
  styles: [
  ]
})
export class TopmangaComponent implements OnInit{
  mangaLst:any;
  typeLength:any;
  usersLength:any;
  ordersArr:any;
  speordersArr:any;
  constructor(private dataServ:DataserviceService,private Usrs:AuthusersService,private orderServ:OrdersService) {}
  ngOnInit(): void {
    this.mangaLst = this.dataServ.getManga().splice(0,3);
    console.log(this.mangaLst);
  }



}
