import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-porting-request',
  templateUrl: './porting-request.component.html',
  styleUrls: ['./porting-request.component.css']
})
export class PortingRequestComponent implements OnInit {
  portingForm: any;
  constructor(private formBuilder: FormBuilder, private requestService: RequestService) { }
 
  ngOnInit() {
    this.portingForm = this.formBuilder.group({
      insuredName:['',Validators.required],
      dateOfBirth:['',Validators.required],
      insuredAddress:['',Validators.required],
      insurerProduct:['',Validators.required],
      sumInsured:['',Validators.required],
      cumulativeBonus:['',Validators.required],
      addOns:['',Validators.required],
      policyNumber:['',Validators.required],
      newInsurerProduct:['',Validators.required],
      newSumInsured:['',Validators.required],
      newCumulativeBonus:['',Validators.required],
      reasonForPortability:['',Validators.required],
      familyMembers:[''],
      exclusionPeriod:['',Validators.required]});
  }
  submitForm() {
    console.log("hi");
    console.log(this.portingForm);
    const res = Object.assign(this.portingForm.value);
    console.log("hiii" + res);
    this.requestService.postRequest(res).subscribe(
      data => {
        console.log('hel');
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
