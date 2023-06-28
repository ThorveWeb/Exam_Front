import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import{LoginService} from '../../service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {       //user data
    username: '',
    password: '',
  };



  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log('login btn clicked');
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snackBar.open('Username is required !', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snackBar.open('Password is required !', '', {
        duration: 3000,
      });
      return;
    }



    //request to serve to generate token
    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        //success 
        console.log(data);
       //login.....localStroge send 
        this.loginService.loginUser(data.token);
        //current user token
        this.loginService.getCurrentUser().subscribe((user: any) => {
      //user data pass
          this.loginService.setUser(user);
          console.log(user);


           //redirect ...ADMIN:admin-dashboard             
          if (this.loginService.getUserRole() == 'admin') {
            //admin dashboard
      //       window.location.href="/admin"
            
         this.router.navigate(['admin']);
           this.loginService.loginStatusSubject.next(true);
          } 
          else if (this.loginService.getUserRole() == 'normal') {
            //nomal user dashbaord
            //window.location.href="/user-dashboard"
            
             this.router.navigate(['user/welcome']);
           this.loginService.loginStatusSubject.next(true);
          } 
          else {
            //location.reload();
            this.loginService.logout();
          }
        });
      },
      (error) => {

        //succes
        console.log(error);

      //angular to matrial error msg
        this.snackBar.open('Invalid Credentials! Try again', '', {
          duration: 3000,
        });

      }
    );
  }
}
