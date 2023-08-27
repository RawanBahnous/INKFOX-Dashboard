import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './ComponentsDashboard/dashboard/dashboard.component';
import { AdminmangaComponent } from './ComponentsDashboard/adminmanga/adminmanga.component';
import { AdmintypesComponent } from './ComponentsDashboard/admintypes/admintypes.component';
import { MangadetailsComponent } from './ComponentsDashboard/mangadetails/mangadetails.component';
import { AddmangaComponent } from './ComponentsDashboard/addmanga/addmanga.component';
import { AddtypeComponent } from './ComponentsDashboard/addtype/addtype.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"adminmanga",component:AdminmangaComponent},
  {path:"admintypes",component:AdmintypesComponent},
  {path:"addmanga",component:AddmangaComponent},
  {path:"addtype",component:AddtypeComponent},
  {path:"mangadetails/:id",component:MangadetailsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
