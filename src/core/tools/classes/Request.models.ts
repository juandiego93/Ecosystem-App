import { Product } from './Product.models';

export class Request {

    referenceNumber: number
    requestedProduct: Product

    constructor(referenceNumber: number, requestedProduct: Product) {
        this.referenceNumber = referenceNumber;
        this.requestedProduct = requestedProduct;
    }
}