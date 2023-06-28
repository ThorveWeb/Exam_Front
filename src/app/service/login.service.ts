import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

//subject help thor data pass
  public loginStatusSubject = new Subject<boolean>();



  constructor(private http: HttpClient) {}



  //current user : which is loggedin
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }
  
  

  //generate token
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

//login user : set token in localStorage  
  public loginUser(token: any) {
    localStorage.setItem('token', token);
//  this.loginStatusSubject.next(true);
    return true;
  }



  //isLogin: User is Logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }



  //logout : remover token from local Storage
  public logout() {
    localStorage.removeItem('token');
  //logout user detail remover
    localStorage.removeItem('user');
    return false;
  }


  //get Token use
  public getToken() {
    return localStorage.getItem('token');
  }


  //Set userDetail
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }


//Get User
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
        //user json thorugh return
      return JSON.parse(userStr);
    } else {
      //not data
      this.logout();
      return null;
    }
  }


  //get user role
  public getUserRole() {
    //getuser function
    let user = this.getUser();
    //admin authority mutiple role hard
    return user.authorities[0].authority;
  }
}
