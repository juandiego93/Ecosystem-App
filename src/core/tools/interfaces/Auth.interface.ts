import { UserLogin } from '../classes/UserLogin.models';

export interface AuthInterface {

    LoginUser(user: UserLogin): {}

}
