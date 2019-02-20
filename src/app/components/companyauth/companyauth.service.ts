import { JwtResponse } from './companyjwt-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { PolicyFormInfo } from '../policyStore/policy-form-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://13.126.73.190:8080/api/auth/signin';
  private signupUrl = 'http://13.126.73.190:8090/api/auth/signup';
  private addPolicyUrl = 'http://13.126.73.190:8090/api/auth/newpolicy';

  constructor(private http: HttpClient) {
  }
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
  addPolicy(policy: PolicyFormInfo): Observable<PolicyFormInfo> {
    return this.http.put<PolicyFormInfo>(this.addPolicyUrl, policy, httpOptions);
  }
}
