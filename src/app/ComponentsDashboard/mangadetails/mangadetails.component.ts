import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthusersService } from 'src/Services/authusers.service';
import { DataserviceService } from 'src/Services/dataservice.service';
import { OrdersService } from 'src/Services/orders.service';

@Component({
  selector: 'app-mangadetails',
  templateUrl: './mangadetails.component.html',
  styles: [
  ]
})
export class MangadetailsComponent implements OnInit{
  mangaLst:any;
  mangaId:any;
  constructor(private dataServ:DataserviceService,private route :ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.mangaId = param.get('id');
        console.log(+this.mangaId);
        this.mangaLst = this.dataServ.getMangaById(+this.mangaId)
        console.log(this.mangaLst);
      }
    )
  }


  back(){
    history.back();
  }


}
