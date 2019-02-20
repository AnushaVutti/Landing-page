import { InsurerPolicyService } from './../../service/insurer-policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-get-company-policy',
 templateUrl: './get-company-policy.component.html',
 styleUrls: ['./get-company-policy.component.css']
})
export class GetCompanyPolicyComponent implements OnInit {

 public requests;
insurerLicense;
constructor(public _route: ActivatedRoute, private router: Router, public insurerPolicyService: InsurerPolicyService) { }
ngOnInit() {
this.insurerLicense = this._route.snapshot.paramMap.get('insurerLicense');
  console.log('In delete component : ' + this.insurerLicense);
this.requests = this.insurerPolicyService.getPolicies(this.insurerLicense).subscribe(
  data => {
    this.requests = data;
},
  error => {
    console.log('some error occured');
    console.log(error.errorMessage);
  // tslint:disable-next-line:semicolon
  }
);
}
}