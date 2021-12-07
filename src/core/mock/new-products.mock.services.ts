import { Injectable } from '@angular/core';
import { Transaction } from '../tools/classes/Transaction.models';
import { TransactionDataInterface } from '../tools/interfaces/TransactionData.interface';
import { Product } from '../tools/classes/Product.models';
import { NewProductDataInterface } from '../tools/interfaces/NewProductData.interface.ts';

@Injectable()
export class NewProductMockServices implements NewProductDataInterface {

    constructor() { }

    private allProducts: Product[] = [
        {
            id: 1,
            nameProduct: 'Agil Credit',
            monthlyIncome: 0,
        },
        {
            id: 2,
            nameProduct: 'Credit Card',
            monthlyIncome: 0,
        },
        {
            id: 3,
            nameProduct: 'Debit Card',
            monthlyIncome: 0,
        },
        {
            id: 4,
            nameProduct: 'Leasing',
            monthlyIncome: 0,
        },
    ]

    GetProductsData(): Product[] {
        return this.allProducts
    }

    GetProductByID(idParam: number): Transaction | any {
        return this.allProducts.find(user => user.id === idParam)
    }

}