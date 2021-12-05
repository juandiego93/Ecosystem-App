import { Injectable } from '@angular/core';
import { Transaction } from '../tools/classes/Transaction.models';
import { TransactionDataInterface } from '../tools/interfaces/TransactionData.interface';

@Injectable()
export class TransactionDataMockServices implements TransactionDataInterface {

    constructor() { }

    private allTransactions: Transaction[] = [
        {
            referenceNum: 0,
            verificationNumber: 0,
            date: '',
            value: 0,
            description: '',
        }
    ]

    GetTransactionsData(): Transaction[] {
        return this.allTransactions
    }

    GetTransactionByID(referenceNumber: number): Transaction | void {
        return this.allTransactions.find(user => user.referenceNum === referenceNumber)
    }

}