import { InsurerPolicyService } from './../../service/insurer-policy.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
 selector: 'app-company-policy-delete',
 templateUrl: './company-policy-delete.component.html',
 styleUrls: ['./company-policy-delete.component.css']
})
export class CompanyPolicyDeleteComponent implements OnInit {
policyId;
insurerName;
 constructor(private route: ActivatedRoute, private router: Router, public insurerPolicyService: InsurerPolicyService) { }


 ngOnInit() {
   this.policyId = this.route.snapshot.paramMap.get('policyId');
   this.insurerName = this.route.snapshot.paramMap.get('insurerName');
   console.log(this.policyId)
   console.log(this.insurerName)
   this.insurerPolicyService.deletePolicy(this.insurerName,this.policyId).subscribe(policy => console.log(policy));  
 }
}