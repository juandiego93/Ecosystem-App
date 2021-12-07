import { Request } from '../classes/Request.models';
import { Product } from '../classes/Product.models';

export interface MockDataInterface {

    GetRequestsData(): Request[]
    GetRequestsByReferenceNumber(referenceNumber: number): Request | void
    saveNewRequestOfUser(idUser: number, product: Product): void
}
