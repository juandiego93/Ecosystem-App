import { Card } from './Card.models'
import { Product } from './Product.models';

export class User {

    IDNumber: number
    name: string
    lastname: string
    phone: number
    email: string
    cards: Card[]
    products: Product[]
    username: string
    password?: string

    constructor(IDNumber: number, name: string, lastname: string, phone: number, email: string, cards: Card[],
        products: Product[], username: string, password: string) {
        this.IDNumber = IDNumber
        this.name = name;
        this.lastname = lastname;
        this.phone = phone
        this.email = email
        this.cards = cards
        this.products = products
        this.username = username
        this.password = password
    }

}