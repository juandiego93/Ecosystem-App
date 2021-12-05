export class Transaction {

    referenceNum: number
    verificationNumber: number
    date: string
    value: number
    description: string

    constructor(referenceNum: number, verificationNumber: number, date: string, value: number, description: string) {
        this.referenceNum = referenceNum
        this.verificationNumber = verificationNumber
        this.date = date
        this.value = value
        this.description = description
    }

}