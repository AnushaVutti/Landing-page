import { FetchFormsService } from './../../service/fetch-forms.service';
import { Component, OnInit } from '@angular/core';
import { formformat } from '../formformat';

@Component({
  selector: 'app-form-dashboard',
  templateUrl: './form-dashboard.component.html',
  styleUrls: ['./form-dashboard.component.css']
})
export class FormDashboardComponent implements OnInit {

  formformats: formformat[];
  formformat: formformat;
  formFormatInputId: formformat["formId"];
  // fetchFormsService: FetchFormsService;
  // inject the service first

  constructor(private fetchFormsService: FetchFormsService){ }

  ngOnInit() {
    this.getAllFormFormats();
  }
  getAllFormFormats(): void {
    this.fetchFormsService.getAllFormFormats().subscribe(formformats => this.formformats = formformats);
  }
  deleteFormFormat(formformat): void {
    console.log(formformat.formId);
    this.fetchFormsService.deleteFormFormat(formformat.formId);
  }
//   clickedAddNewFormFormat(): void {
//     $scope.clicked = function(){
//       window.location = "#/test.html";
// }
//   }
  // addNewFormFormat(): void {
  //   this.fetchFormsService.addNewFormFormat().subscribe();
  // }

}
