import { Injectable } from '@angular/core';
import { CardDataMockService } from 'src/core/mock/card-data.mock.services';
import { Card } from 'src/core/tools/classes/Card.models';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private cardDataMockService: CardDataMockService) { }


  getAllCards(): Card[] {
    return this.cardDataMockService.GetUCardsData()
  }

  getCardById(id: number): Card | null {
    return this.cardDataMockService.GetCardByID(id)
  }


}
