import { Card } from '../classes/Card.models';
import { User } from '../classes/User.models';

export interface CardDataInterface {

    GetUCardsData(): Card[]
    GetCardByID(IdNumber: number): Card | void

}
