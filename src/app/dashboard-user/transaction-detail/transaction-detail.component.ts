import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Transaction } from 'src/core/tools/classes/Transaction.models';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  public idTransactionSelected: string | null
  public transactionSelected: Transaction | null

  constructor(private route: ActivatedRoute, public transactionService: TransactionService) {
    this.idTransactionSelected = this.route.snapshot.paramMap.get('idtransaction');
    this.transactionSelected = this.transactionService.GetTransactionByReferenceNumber(Number(this.idTransactionSelected))

  }

  ngOnInit(): void { }

}
