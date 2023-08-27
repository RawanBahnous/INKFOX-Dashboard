import { Component, OnInit } from '@angular/core';
import { AuthusersService } from 'src/Services/authusers.service';
import { DataserviceService } from 'src/Services/dataservice.service';
import { OrdersService } from 'src/Services/orders.service';

@Component({
  selector: 'app-adminmanga',
  templateUrl: './adminmanga.component.html',
  styleUrls: []
})
export class AdminmangaComponent implements OnInit{
  mangaLst:any;
  typeLength:any;
  usersLength:any;
  ordersArr:any;
  speordersArr:any;
  constructor(private dataServ:DataserviceService,private Usrs:AuthusersService,private orderServ:OrdersService) {}
  ngOnInit(): void {
    this.mangaLst = this.dataServ.getManga();
    console.log(this.mangaLst);
  }
  Delete(id:number){
    if (Array.isArray(this.mangaLst) && id >= 0 && id < this.mangaLst.length) {
      this.mangaLst.splice(+id,1);
    }
  }
  search(searching:any){
    if (Array.isArray(this.mangaLst)) {
        this.mangaLst = this.mangaLst.filter((m) =>{
          return m.Title.toLowerCase().includes(searching.toLowerCase());
    });
    };
  }
  sort(){
    if (Array.isArray(this.mangaLst) && this.mangaLst.length > 0) {
        this.mangaLst = this.mangaLst.sort(
          (a:any ,b:any) =>
          {
            let namea = a.Title.toLowerCase();
            const nameB = b.Title.toLowerCase();
              if (namea < nameB) return -1;
              if (namea > nameB) return 1;
              return 0;
          });
        console.log(this.mangaLst);
    }}
}
