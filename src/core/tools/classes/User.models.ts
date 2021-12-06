import { Card } from './Card.models'
import { Service } from './Service.models';
import { Transaction } from './Transaction.models';

export class User {

    IDNumber: number
    name: string
    lastname: string
    phone: number
    email: string
    cards: Card[]
    services: Service[]
    username: string
    password?: string

    constructor(IDNumber: number, name: string, lastname: string, phone: number, email: string, cards: Card[],
        services: Service[], username: string, password: string) {
        this.IDNumber = IDNumber
        this.name = name;
        this.lastname = lastname;
        this.phone = phone
        this.email = email
        this.cards = cards
        this.services = services
        this.username = username
        this.password = password
    }

}