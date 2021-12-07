import { Card } from './Card.models'
import { Request } from './Request.models'

export class User {

    IDNumber: number
    name: string
    lastname: string
    phone: number
    email: string
    cards: Card[]
    request: Request[]
    username: string
    password?: string

    constructor(IDNumber: number, name: string, lastname: string, phone: number, email: string, cards: Card[],
        request: Request[], username: string, password: string) {
        this.IDNumber = IDNumber
        this.name = name;
        this.lastname = lastname;
        this.phone = phone
        this.email = email
        this.cards = cards
        this.request = request
        this.username = username
        this.password = password
    }

}