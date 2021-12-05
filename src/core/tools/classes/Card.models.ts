export class Card {

    numID: number
    numCard: number
    ownerName: string
    bank: string
    expirationDate: string
    type: 'Debito' | 'Credito'
    ccv: number
    totalCapital: number
    totalDebts: number
    paymentDate: string

    constructor(numID: number, numCard: number, ownerName: string, bank: string, expirationDate: string,
        type: 'Debito' | 'Credito', ccv: number, totalCapital: number, totalDebts: number, paymentDate: string) {
        this.numCard = numCard
        this.numID = numID
        this.ownerName = ownerName
        this.bank = bank
        this.expirationDate = expirationDate
        this.type = type
        this.ccv = ccv
        this.totalCapital = totalCapital
        this.totalDebts = totalDebts
        this.paymentDate = paymentDate
    }

}