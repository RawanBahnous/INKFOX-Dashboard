import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './ComponentsDashboard/adminhome/adminhome.component';
import { AdminnavComponent } from './ComponentsDashboard/adminnav/adminnav.component';
import { AdminfooterComponent } from './ComponentsDashboard/adminfooter/adminfooter.component';
import { DashboardComponent } from './ComponentsDashboard/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataserviceService } from 'src/Services/dataservice.service';
import { AdminvendorsComponent } from './ComponentsDashboard/adminvendors/adminvendors.component';
import { AdminmangaComponent } from './ComponentsDashboard/adminmanga/adminmanga.component';
import { AdmintypesComponent } from './ComponentsDashboard/admintypes/admintypes.component';
import { TopmangaComponent } from './ComponentsDashboard/topmanga/topmanga.component';
import { ToptypesComponent } from './ComponentsDashboard/toptypes/toptypes.component';
import { MangadetailsComponent } from './ComponentsDashboard/mangadetails/mangadetails.component';
import { AddmangaComponent } from './ComponentsDashboard/addmanga/addmanga.component';
import { AddtypeComponent } from './ComponentsDashboard/addtype/addtype.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    AdminnavComponent,
    AdminfooterComponent,
    DashboardComponent,
    AdminvendorsComponent,
    AdminmangaComponent,
    AdmintypesComponent,
    TopmangaComponent,
    ToptypesComponent,
    MangadetailsComponent,
    AddmangaComponent,
    AddtypeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    DataserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
