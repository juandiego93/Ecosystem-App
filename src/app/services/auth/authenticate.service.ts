import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/core/tools/classes/UserLogin.models';
import { AuthMockService } from '../../../core/mock/auth-mock.services';
import { UserDataMockService } from 'src/core/mock/user-data.mock.services';
import { User } from 'src/core/tools/classes/User.models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {


  // private currentUserSubject: BehaviorSubject<UserLogin>;
  // public currentUser: Observable<UserLogin>;

  private IsLoggedInSubject: BehaviorSubject<Boolean>;
  public IsLoggedIn: Observable<Boolean>;

  constructor(private authMockService: AuthMockService, private userDataMockService: UserDataMockService) {
    // this.currentUserSubject = new BehaviorSubject<any>(UserLogin);
    // this.currentUser = this.currentUserSubject.asObservable();

    this.IsLoggedInSubject = new BehaviorSubject<any>(Boolean);
    this.IsLoggedIn = this.IsLoggedInSubject.asObservable();

  }

  login({ username, password }: UserLogin): Observable<Boolean> {
    return this.IsLoggedIn = new Observable((observer) => {
      const data = this.authMockService.LoginUser({ username, password })
      if (data) { this.setSessionStorage(Number(username)) }
      observer.next(data)
    });
  }

  // public get currentUserValue(): UserLogin {
  //   return this.currentUserSubject.value;
  // }

  getSessionStorage(): User {
    let user: User = JSON.parse(localStorage.getItem('currentUser') || '')
    return user;

  }

  setSessionStorage(id: number) {
    const User = this.userDataMockService.GetUserByID(id)
    localStorage.setItem('currentUser', JSON.stringify(User));
  }

}
