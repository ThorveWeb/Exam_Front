import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent {


  isLoggedIn = false;
  user: any;


  constructor(public login:LoginService){}

  ngOnInit():void{
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn=this.login.isLoggedIn();
      this.user=this.login.getUser();
    });
  }
  

  public logout(){

    this.login.logout();
   // window.location.reload();
   this.login.loginStatusSubject.next(false);
  }
}
