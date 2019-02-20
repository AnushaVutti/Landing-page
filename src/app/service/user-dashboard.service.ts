import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
// import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {
  public localMongoUrl = 'http://13.126.73.190:8090/api/auth/requests/';
 public recommendationsUrl = 'http://13.126.73.190:8080/rest/neo4j/recommendations/policyByuserName/';
 public profileUrl = 'http://13.126.73.190:8090/api/auth/profile/';
 constructor(private http: HttpClient) {
   console.log('http service got called');
 }
   public getRequests(userId): any {
     console.log( userId);
     const requests = this.http.get(this.localMongoUrl + userId);
     console.log(requests);
     return requests;
   }
   public getRecommendations(userId): any {
     console.log(userId);
     const recommendations = this.http.get(this.recommendationsUrl + userId);
     return recommendations;
   }
   public getProfile(username): any {
     console.log('service' + username);
     const profile = this.http.get(this.profileUrl + username);
     console.log('after');
     return profile;
   }
   public updateProfile(username, form): any {
     console.log('service' + username);
     const profile = this.http.put(this.profileUrl + username,form);
     console.log('after');
     return profile;
   }
}
