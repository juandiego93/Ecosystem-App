import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card/card.service';
import { Card } from 'src/core/tools/classes/Card.models';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  public idCardSelected: string | null;
  public cardSelected: Card | null;

  constructor(private route: ActivatedRoute, private cardService: CardService) {
    this.idCardSelected = this.route.snapshot.paramMap.get('idcard');
    this.cardSelected = this.cardService.getCardById(Number(this.idCardSelected))
    console.log(this.cardSelected)
  }

  ngOnInit(): void {
  }

}
