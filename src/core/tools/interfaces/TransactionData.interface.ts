import { Transaction } from '../classes/Transaction.models';

export interface TransactionDataInterface {

    GetTransactionsData(): Transaction[]
    GetTransactionByID(IdNumber: number): Transaction | void

}
