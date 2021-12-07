import { Injectable } from '@angular/core';
import { Request } from '../tools/classes/Request.models';
import { MockDataInterface } from '../tools/interfaces/MockData.interface';
import { Product } from '../tools/classes/Product.models';
import { StorageService } from '../../app/services/storage/storage.service';
import { User } from '../tools/classes/User.models';
import { Session } from '../tools/classes/Session.models';

@Injectable()
export class RequestDataMockServices implements MockDataInterface {

    constructor(private storageService: StorageService) { }

    private allRequest: Request[] = [];

    GetRequestsData(): Request[] {
        return this.allRequest
    }

    GetRequestsByReferenceNumber(referenceNumber: number): Request | any {
        return this.allRequest.find(request_ => request_.referenceNumber === referenceNumber)
    }

    saveNewRequestOfUser(idUser: number, product: Product) {
        const currentUserIncomming: User = this.storageService.getCurrentUser()
        if (currentUserIncomming && currentUserIncomming.IDNumber === idUser) {
            const request_: Request = { referenceNumber: this.randomNumber(), requestedProduct: product }
            currentUserIncomming.request.push(request_)
            const session_: Session = { token: 'fake token', user: currentUserIncomming }
            this.storageService.setCurrentSession(session_)
        }
    }

    private randomNumber(): number {
        return Math.floor(Math.random() * new Date().getMilliseconds())
    }

}