export class Transaction {

    referenceNum: number
    verificationNumber: number
    date: string
    value: number
    description: string
    sourceAccount: number
    destinationAccount: number

    constructor(referenceNum: number, verificationNumber: number, date: string, value: number, description: string, sourceAccount: number, destinationAccount: number) {
        this.referenceNum = referenceNum
        this.verificationNumber = verificationNumber
        this.date = date
        this.value = value
        this.description = description
        this.sourceAccount = sourceAccount
        this.destinationAccount = destinationAccount
    }

}