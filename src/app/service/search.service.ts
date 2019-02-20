import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    trackName: string;
    visible: boolean;
    private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
    constructor(private http: HttpClient) {
        this.visible = false;
    }

    baseUrl = 'http://13.126.73.190:8095/api/v1/';
    changeMessage(message: string) {
        this.trackName = message;
        console.log('in service');
        this.messageSource.next(message);
      }
    public getSearch(searchValue) {
        return this.http.get( this.baseUrl + 'policies/' + searchValue );
    }
    show() {
        this.visible = true;
    }
    hide() {
        this.visible =false;
    }
}
