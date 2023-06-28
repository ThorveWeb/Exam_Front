import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user:any;

   constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    //server to  data get
    // this.loginService.getCurrentUser().subscribe(
    //   (user:any)=>{
    //     this.user=user;
    //   },
    //   (error)=>{
    //     alert("error");
    //   }
    // )



    //local Stoage data are use
 
    this.user=this.loginService.getUser();
  }
}
