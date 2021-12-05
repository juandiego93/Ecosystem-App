import { Injectable } from '@angular/core';
import { Card } from '../tools/classes/Card.models';
import { CardDataInterface } from '../tools/interfaces/CardData.interface';
import { TransactionDataMockServices } from './transaction-data.mock.services';


@Injectable()
export class CardDataMockService implements CardDataInterface {

    private cardsData: Card[] = [
        {
            numID: 1,
            numCard: 35664562,
            ownerName: 'JUAN D OSORIO C',
            bank: 'Bancolombia',
            expirationDate: '05/20',
            type: 'Debito',
            ccv: 194,
            totalCapital: 1000000,
            totalDebts: 22222121,
            paymentDate: '12/10/2022',
            transactions: [
                this.transactionDataMockServices.GetTransactionByReferenceNumber(1),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(43),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(88),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(232),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(35),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(6555),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(7666),
            ],
        },
        {
            numID: 2,
            numCard: 663489004,
            ownerName: 'JUAN D OSORIO C',
            bank: 'Bancolombia',
            expirationDate: '05/20',
            type: 'Credito',
            ccv: 194,
            totalCapital: 1000000,
            totalDebts: 22222121,
            paymentDate: '12/10/2022',
            transactions: [
                this.transactionDataMockServices.GetTransactionByReferenceNumber(1),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(43),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(88),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(232),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(35),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(6555),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(7666),
            ],
        },
        {
            numID: 3,
            numCard: 8567883463,
            ownerName: 'COSME FULANITO',
            bank: 'Davivienda',
            expirationDate: '03/22',
            type: 'Credito',
            ccv: 477,
            totalCapital: 1000000,
            totalDebts: 22222121,
            paymentDate: '12/10/2022',
            transactions: [
                this.transactionDataMockServices.GetTransactionByReferenceNumber(1),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(43),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(88),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(232),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(35),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(6555),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(7666),
            ],
        },
        {
            numID: 4,
            numCard: 66127473212,
            ownerName: 'COSME FULANITO',
            bank: 'Davivienda',
            expirationDate: '03/22',
            type: 'Credito',
            ccv: 477,
            totalCapital: 1000000,
            totalDebts: 22222121,
            paymentDate: '12/10/2022',
            transactions: [
                this.transactionDataMockServices.GetTransactionByReferenceNumber(1),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(43),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(88),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(232),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(35),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(6555),
                this.transactionDataMockServices.GetTransactionByReferenceNumber(7666),
            ],
        }
    ];

    constructor(private transactionDataMockServices: TransactionDataMockServices) { }

    GetUCardsData(): Card[] {
        return this.cardsData
    }

    GetCardByID(IdNumber: number): Card | any {
        return this.cardsData.find(card => card.numID === IdNumber)
    }



}
