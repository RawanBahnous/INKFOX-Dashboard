import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthusersService } from 'src/app/Services/authusers.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Check if the user is an admin and navigate to dashboard
    // const user = this.authServ.getCurrentUser();
    // if (user && user.isAdmin) {
    //   this.router.navigate(['/adminhome/dashboard']);
    // }
  }
}
