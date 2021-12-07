export class Product {

    id: number
    nameProduct: string
    monthlyIncome: number
    cellPhone?: number

    constructor(id: number, nameProduct: string, monthlyIncome: number) {
        this.id = id
        this.nameProduct = nameProduct
        this.monthlyIncome = monthlyIncome
    }

}