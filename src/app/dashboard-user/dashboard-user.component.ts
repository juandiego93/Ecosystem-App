import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticateService } from '../services/auth/authenticate.service';
import { UserLogin } from 'src/core/tools/classes/UserLogin.models';
import { User } from '../../core/tools/classes/User.models';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  showFiller = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public currentUser: User
  public menuSidenav: boolean

  constructor(private breakpointObserver: BreakpointObserver, private authenticateService: AuthenticateService) {
    this.currentUser = this.authenticateService.getSessionStorage()
    this.menuSidenav = false
  }

  ngOnInit(): void { }

  hideLabelOpenMenu() {
    this.menuSidenav = !this.menuSidenav
  }

  getTotalBalanceCards() {
    let total = 0
    this.currentUser.cards.forEach(card => {
      total += card.totalCapital
    })
    return total
  }

}
