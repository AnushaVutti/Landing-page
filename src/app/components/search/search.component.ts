import { SearchService } from './../../service/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  message: any;
  policies: any;
  policyName: string;
  diseasesList: any;
  premium: any;
  agegroup: any;
  flag = 0;
  result;
  public policy = {
    policyName : this.policyName,
    diseasesList: this.diseasesList,
    premium: this.premium,
    agegroup: this.agegroup
  };
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }
  ngOnInit() {
    this.message = this.route.snapshot.paramMap.get('value');
    this.policies = this.searchService.getSearch(this.message).subscribe(data => {
      this.policies = data;
      console.log(data);
    });
  }

}
