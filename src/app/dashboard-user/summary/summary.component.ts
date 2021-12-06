import { Component, OnInit } from '@angular/core';
import { User } from 'src/core/tools/classes/User.models';
import { AuthenticateService } from '../../services/auth/authenticate.service';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  private currentUser: User | void
  public cards: any
  constructor(private authenticateService: AuthenticateService, private storageService: StorageService) {
    this.currentUser = this.storageService.getCurrentUser()
    this.cards = this.currentUser.cards

  }

  ngOnInit(): void {
  }

}
