import { SearchService } from './../../service/search.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurer1',
  templateUrl: './insurer1.component.html',
  styleUrls: ['./insurer1.component.css']
})
export class Insurer1Component implements OnInit {
  board: string;
  errorMessage: string;
  constructor(private userService: UserService, private searchservice: SearchService) { }

  ngOnInit() {
    this.searchservice.hide();
    //window.location.reload();
    // this.userService.getUserBoard().subscribe(
    //   data => {
    //     this.board = data;
    //   },
      // error => {
      //   this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      // }
    //);
  }
}
