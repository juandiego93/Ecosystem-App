import { Transaction } from '../classes/Transaction.models';

export interface TransactionDataInterface {

    GetTransactionsData(): Transaction[]
    GetTransactionByReferenceNumber(IdNumber: number): Transaction | void

}
