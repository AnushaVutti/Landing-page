import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: any;
  message: string;
  name: any;
  isLogin: any;
  currentRoute: any;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.message);
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.name = (<any>event).url.split("/").slice(-1)[0];
        this.isLogin = this.currentRoute === 'insurerDashboard/:insurerLicense';
      }
  })
}
  search() {
    this.router.navigate(['/search', this.message]);
    window.location.reload();
  }

}
