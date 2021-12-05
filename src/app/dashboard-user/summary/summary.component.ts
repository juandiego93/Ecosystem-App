import { Component, OnInit } from '@angular/core';
import { User } from 'src/core/tools/classes/User.models';
import { AuthenticateService } from '../../services/auth/authenticate.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  public currentUser: User

  constructor(private authenticateService: AuthenticateService) {
    this.currentUser = this.authenticateService.getSessionStorage()
    console.log(this.currentUser)
  }

  ngOnInit(): void {
  }

}
