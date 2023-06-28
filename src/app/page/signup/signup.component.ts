import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';



import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../service/user.service';
import Swal from 'sweetalert2';

//sweet alert




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }




















  //main code start

  constructor(
    private userService: UserService,
    private snack: MatSnackBar    //alert bar display
  ) { }





  //Same to Backend private variable name are same name
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };


  formSubmit() {
    console.log(this.user)

    if (this.user.username == '' || this.user.password == null) {
      //alert("user is Required....!!")

      //mesaage display alert box
      this.snack.open("Username is Required...!!!", "", {
        duration: 3000               //automated hide msg
        ,
        verticalPosition: 'top' //bottom 
        , horizontalPosition: 'right'  //LRTBCS
      })
      return;
    }


    //adduser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        console.log(data)
        //success
        //sweet  alert success msg    ======= title,body,btn
        Swal.fire("Successfully done !!", "User ID is" + data.id, "success");
      },
      (error) => {
        //alert("error")

        this.snack.open("Something went wrong.......!", "", {
          duration: 3000
        })
      }
    )

  }


}
