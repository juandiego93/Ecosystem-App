import { Injectable } from '@angular/core';
import { User } from 'src/core/tools/classes/User.models';
import { UserDataInterface } from '../tools/interfaces/UserData.interface';
import { CardDataMockService } from './card-data.mock.services';
import { TransactionDataMockServices } from './transaction-data.mock.services';


@Injectable()
export class UserDataMockService implements UserDataInterface {
    constructor(private cardDataMockService: CardDataMockService,) { }

    private usersData: User[] = [
        {
            IDNumber: 1053830197,
            name: 'Juan Diego',
            lastname: 'Osorio Castrillón',
            phone: 3207043303,
            email: 'juand.osorio@hotmail.com',
            username: 'juandiego',
            password: 'abcd',
            cards: [
                this.cardDataMockService.GetCardByID(1),
                this.cardDataMockService.GetCardByID(2),
            ],
            services: [],

        },
        {
            IDNumber: 2312332,
            name: 'Cosme',
            lastname: 'Fulanito',
            phone: 3207043303,
            email: 'cosme.fulanito@hotmail.com',
            username: 'cosme',
            password: 'abcd',
            cards: [
                this.cardDataMockService.GetCardByID(3),
            ],
            services: [],
        }
    ];


    GetUsersData(): User[] {
        return this.usersData
    }

    GetUserByID(IdNumber: number): User | any {
        return this.usersData.find(user => user.IDNumber === IdNumber)
    }



}
