import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/service/user-dashboard.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public username;
  public profile:any;
  constructor(private route: ActivatedRoute, private userService: UserDashboardService) { }
 
 ngOnInit() {
   this.username = this.route.snapshot.paramMap.get('username');
   console.log('ts' + this.username);
   this.userService.getProfile(this.username).subscribe(
    data => {
      console.log("username: " + data.username);
      console.log('jell' + data.email);
      this.profile = data;
 },
    error => {
      console.log('some error occured');
      console.log(error.errorMessage);
    // tslint:disable-next-line:semicolon
    }
  );
 }
}
