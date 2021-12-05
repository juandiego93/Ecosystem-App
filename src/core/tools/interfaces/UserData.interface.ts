import { User } from '../classes/User.models';

export interface UserDataInterface {

    GetUsersData(): User[]
    GetUserByID(IdNumber: number): User | void

}
