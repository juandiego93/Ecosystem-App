import { Injectable } from '@angular/core';
import { Product } from 'src/core/tools/classes/Product.models';
import { NewProductMockServices } from '../../../core/mock/new-products.mock.services';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private newProductMockServices: NewProductMockServices) { }

  GetProductsData(): Product[] {
    return this.newProductMockServices.GetProductsData()
  }

  GetProductByID(idParam: number): Product | any {
    return this.newProductMockServices.GetProductByID(idParam)
  }

}
