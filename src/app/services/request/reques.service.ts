import { Injectable } from '@angular/core';
import { Product } from 'src/core/tools/classes/Product.models';
import { Request } from '../../../core/tools/classes/Request.models';
import { RequestDataMockServices } from '../../../core/mock/request-data.mock.services';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private requestDataMockServices: RequestDataMockServices) { }


  GetRequestsData(): Request[] {
    return this.GetRequestsData()
  }

  GetRequestsByReferenceNumber(referenceNumber: number): Request | void {
    return this.requestDataMockServices.GetRequestsByReferenceNumber(referenceNumber)
  }

  saveNewRequestOfUser(idUser: number, product: Product): void {
    this.requestDataMockServices.saveNewRequestOfUser(idUser, product)
  }

}
