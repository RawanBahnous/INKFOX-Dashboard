import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/Services/dataservice.service';

@Component({
  selector: 'app-admintypes',
  templateUrl: './admintypes.component.html',
  styles: [
  ]
})
export class AdmintypesComponent implements OnInit{
  typesLst:any;
  constructor(private dataServ:DataserviceService) {}
  ngOnInit(): void {
    this.typesLst = this.dataServ.getTypes().splice(0,3);
    console.log(this.typesLst);
  }

search(search:any){
  if (Array.isArray(this.typesLst)) {
    this.typesLst = this.typesLst.filter((t)=>{
      return t.typename.toLowerCase().includes(search.toLowerCase());
    })
  }
}
delete(id:number){
  if (Array.isArray(this.typesLst) && id >= 0 && id < this.typesLst.length) {
  this.typesLst = this.typesLst.splice(+id,1);
  }
}
  sort(){
    if (Array.isArray(this.typesLst) && this.typesLst.length > 0) {
        this.typesLst = this.typesLst.sort(
          (a:any ,b:any) =>
          {
            let namea = a.typename.toLowerCase();
            const nameB = b.typename.toLowerCase();
              if (namea < nameB) return -1;
              if (namea > nameB) return 1;
              return 0;
          });
        console.log(this.typesLst);
    }}

}
