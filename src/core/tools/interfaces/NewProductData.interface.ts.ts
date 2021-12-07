import { Product } from '../classes/Product.models';

export interface NewProductDataInterface {

    GetProductsData(): Product[]
    GetProductByID(IdNumber: number): Product | void

}
