import { Injectable } from '@angular/core';
import { Transaction } from '../tools/classes/Transaction.models';
import { TransactionDataInterface } from '../tools/interfaces/TransactionData.interface';

@Injectable()
export class TransactionDataMockServices implements TransactionDataInterface {

    constructor() { }

    private allTransactions: Transaction[] = [
        {
            referenceNum: 1,
            verificationNumber: 120,
            date: '12/08/2020',
            value: 1000,
            description: 'Mom',
            sourceAccount: 3121222,
            destinationAccount: 4333223,
        },
        {
            referenceNum: 43,
            verificationNumber: 43432,
            date: '05/10/2021',
            value: 10000,
            description: 'Payment University',
            sourceAccount: 3234215,
            destinationAccount: 5553521,
        },
        {
            referenceNum: 88,
            verificationNumber: 523,
            date: '04/05/2020',
            value: 1038233,
            description: 'Travel to Panama',
            sourceAccount: 1423423,
            destinationAccount: 355555,
        },
        {
            referenceNum: 444,
            verificationNumber: 41242,
            date: '05/07/2021',
            value: 200000,
            description: 'Credit Cards',
            sourceAccount: 122424442,
            destinationAccount: 4323122,
        },
        {
            referenceNum: 533,
            verificationNumber: 3230,
            date: '10/12/2020',
            value: 12000,
            description: 'Gasoline',
            sourceAccount: 4232232,
            destinationAccount: 4545223,
        },
        {
            referenceNum: 4233,
            verificationNumber: 2321,
            date: '05/01/2021',
            value: 134440,
            description: 'Gym',
            sourceAccount: 1234244,
            destinationAccount: 5555523,
        },
        {
            referenceNum: 232,
            verificationNumber: 422,
            date: '15/11/2020',
            value: 90000,
            description: 'Dad',
            sourceAccount: 12000,
            destinationAccount: 122222,
        },
        {
            referenceNum: 35,
            verificationNumber: 1111,
            date: '10/03/2020',
            value: 13000,
            description: 'Payment PC',
            sourceAccount: 411000,
            destinationAccount: 10444,
        },
        {
            referenceNum: 9900,
            verificationNumber: 30222,
            date: '27/10/2019',
            value: 200000,
            description: 'Birthdate',
            sourceAccount: 400752,
            destinationAccount: 1223,
        },
        {
            referenceNum: 500001,
            verificationNumber: 23323,
            date: '05/01/2021',
            value: 34000,
            description: 'Hotel',
            sourceAccount: 444244,
            destinationAccount: 54523,
        },
        {
            referenceNum: 33443,
            verificationNumber: 21111,
            date: '23/04/2018',
            value: 2334344,
            description: 'Food',
            sourceAccount: 2342323,
            destinationAccount: 99112,
        },
        {
            referenceNum: 6555,
            verificationNumber: 73456,
            date: '19/12/2019',
            value: 6543444,
            description: 'Payment Car',
            sourceAccount: 2004,
            destinationAccount: 3400,
        },
        {
            referenceNum: 7666,
            verificationNumber: 12222,
            date: '31/1072021',
            value: 77000,
            description: 'Buy Headphones',
            sourceAccount: 54444,
            destinationAccount: 12222,
        },
        {
            referenceNum: 9000,
            verificationNumber: 12222,
            date: '25/11/2021',
            value: 500000,
            description: 'Dad',
            sourceAccount: 44122,
            destinationAccount: 90021,
        },
        {
            referenceNum: 500011,
            verificationNumber: 3421,
            date: '15/01/2019',
            value: 400000,
            description: 'Fix house',
            sourceAccount: 540000,
            destinationAccount: 15333,
        },

    ]

    GetTransactionsData(): Transaction[] {
        return this.allTransactions
    }

    GetTransactionByReferenceNumber(referenceNumber: number): Transaction | any {
        return this.allTransactions.find(user => user.referenceNum === referenceNumber)
    }

}