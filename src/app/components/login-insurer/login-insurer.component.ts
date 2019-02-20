// import { Router } from '@angular/router';
// import { TokenStorageService } from './../companyauth/token-storage.service';
// import { AuthService } from './../companyauth/companyauth.service';
// import { AuthLoginInfo } from './../companyauth/login-info';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login-insurer',
//   templateUrl: './login-insurer.component.html',
//   styleUrls: ['./login-insurer.component.css']
// })
// export class LoginInsurerComponent implements OnInit {

//   form: any = {};
//  isLoggedIn = false;
//  isLoginFailed = false;
//  errorMessage = '';
//  roles: string[] = [];
//  private loginInfo: AuthLoginInfo;

//  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router :Router) { }

//  ngOnInit() {
//    if (this.tokenStorage.getToken()) {
//      this.isLoggedIn = true;
//      this.roles = this.tokenStorage.getAuthorities();
//    }
//  }
//  onSubmit() {
//    console.log(this.form);

//    this.loginInfo = new AuthLoginInfo(
//      this.form.insurerLicense,
//      this.form.password);

//    this.authService.attemptAuth(this.loginInfo).subscribe(
//      data => {
//        this.tokenStorage.saveToken(data.accessToken);
//        this.tokenStorage.saveInsurerLicense(data.insurerLicense);
//        this.tokenStorage.saveAuthorities(data.authorities);

//        this.isLoginFailed = false;
//        this.isLoggedIn = true;
//        this.roles = this.tokenStorage.getAuthorities();
//        this.router.navigate(['/insurerDashboard', this.form.insurerLicense]); 
//       //  this.reloadPage();
//      },
//      error => {
//        console.log(error);
//        this.errorMessage = error.error.message;
//        this.isLoginFailed = true;
//      }
//    );
//  }

//  reloadPage() {
//    window.location.reload();
//  }
// }

