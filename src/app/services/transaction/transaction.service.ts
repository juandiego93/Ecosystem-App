import { Injectable } from '@angular/core';
import { TransactionDataMockServices } from 'src/core/mock/transaction-data.mock.services';
import { Transaction } from 'src/core/tools/classes/Transaction.models';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private transactionDataMockServices: TransactionDataMockServices) { }

  GetTransactionsData(): Transaction[] {
    return this.transactionDataMockServices.GetTransactionsData()
  }

  GetTransactionByReferenceNumber(referenceNumber: number): Transaction | any {
    return this.transactionDataMockServices.GetTransactionByReferenceNumber(referenceNumber)
  }

}
