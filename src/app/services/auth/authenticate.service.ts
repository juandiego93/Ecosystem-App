import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/core/tools/classes/UserLogin.models';
import { UserDataMockService } from 'src/core/mock/user-data.mock.services';
import { Router } from '@angular/router';
import { Session } from 'src/core/tools/classes/Session.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private IsLoggedInSubject: BehaviorSubject<Boolean>;
  private basePath = '/api/authenticate/';
  public IsLoggedIn: Observable<Boolean>;

  constructor(private http: HttpClient, private userDataMockService: UserDataMockService, private router: Router) {
    this.IsLoggedInSubject = new BehaviorSubject<any>(Boolean);
    this.IsLoggedIn = this.IsLoggedInSubject.asObservable();
  }

  login(loginObj: UserLogin): Observable<Session> {
    return this.http.post<Session>(this.basePath + 'login', loginObj);
  }

  logout(): Observable<Boolean> {
    return this.http.post<Boolean>(this.basePath + 'logout', {});
  }

}
