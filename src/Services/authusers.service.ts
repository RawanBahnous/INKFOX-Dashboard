import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthusersService {
   users:IUser[] = [
    {username:"rawan_44",email:"rawan@mail.com",password:"Raw@@123", isAdmin: false,islogged:false},
    {username:"amna_44",email:"amna@mail.com",password:"Raw@@123", isAdmin: true,islogged:false},
  ];

  private currentUser: IUser | undefined;

  register(name:string,pass:string,email:string){
     let newUser:IUser ={
       username:name,
       email:email,
       password:pass,
       isAdmin: false,
       islogged:true,
     }
     let checkname:any = this.users.filter((p)=> p.username === newUser.username);
     let chackpass:any = this.users.filter((p)=> p.password === newUser.password);

     if (checkname && chackpass) {
       this.users.push(newUser);
     }else{
      console.log("Person already logged in ");
     }
  }
  login( email:string,pass:string){
    const user:IUser | undefined = this.users.find((p)=> p.password === pass && p.email == email);
    if (user) {
      user.islogged = true;
      this.currentUser = user;
      return true;
    } else {
      return false;
    }
  }

  logout(){
    if (this.currentUser) {
        this.currentUser.islogged = false;
        this.currentUser = undefined;
    }
  }
  isLoggedIn(){
    return !!this.currentUser;
  }
  getCurrentUser(){
    return this.currentUser;
  }
}
