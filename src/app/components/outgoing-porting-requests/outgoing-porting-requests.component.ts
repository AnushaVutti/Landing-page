import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InsurerOutgoingportingrequestService } from 'src/app/service/insurer-outgoingportingrequest.service';
import { InsurerAcceptoutgoingportingrequestService } from 'src/app/service/insurer-acceptoutgoingportingrequest.service';

@Component({
  selector: 'app-outgoing-porting-requests',
  templateUrl: './outgoing-porting-requests.component.html',
  styleUrls: ['./outgoing-porting-requests.component.css']
})
export class OutgoingPortingRequestsComponent implements OnInit {
  insurerLicense: any;
  requests: any;
  constructor(private route:ActivatedRoute, private incoming: InsurerOutgoingportingrequestService,private portrequest: InsurerAcceptoutgoingportingrequestService) { }

  ngOnInit() {
    console.log("inside outgoing");
    this.insurerLicense = this.route.snapshot.paramMap.get('insurerLicense');
    console.log(this.insurerLicense);
    this.requests = this.incoming.getSearch(this.insurerLicense).subscribe(data =>
      {
        this.requests = data;
        console.log(data);
        console.log("after service method");
    });

  }
  port(request) {
    this.portrequest.getSearch(request).subscribe(data=>console.log(data));
    this.reloadData();
  }
  reloadData(){
    window.location.reload();
  }

}
