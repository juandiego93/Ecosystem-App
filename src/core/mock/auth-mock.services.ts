import { Injectable } from '@angular/core';
import { UserLogin } from '../tools/classes/UserLogin.models';
import { AuthInterface } from '../tools/interfaces/Auth.interface';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthMockService implements AuthInterface {

    private userToLogin: UserLogin[] = [
        { username: '1053830197', password: '123450' },
        { username: '10538301971', password: '123451' },
        { username: '10538301972', password: '123452' },
        { username: '10538301973', password: '123453' },
        { username: '10538301974', password: '123454' },
        { username: '10538301975', password: '123455' },
        { username: '10538301976', password: '123456' },
    ]

    constructor() { }

    LoginUser(userLogin: UserLogin): Boolean {
        let IsLoggin = false
        this.userToLogin.map(userMap => {
            if (userLogin.username === userMap.username && userLogin.password === userMap.password) {
                IsLoggin = true
            }
        })
        return IsLoggin;
    }
}
