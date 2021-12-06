import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../tools/guards/auth.guard';
import { DashboardUserComponent } from './dashboard-user.component';
import { SummaryComponent } from './summary/summary.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';


const routes: Routes = [

  {
    path: '', component: DashboardUserComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: SummaryComponent, canActivateChild: [AuthGuard] },
      { path: 'card-detail/:idcard', component: CardDetailComponent, canActivate: [AuthGuard], },
      { path: 'card-detail/:idcard/transaction-detail/:idtransaction', component: TransactionDetailComponent, canActivateChild: [AuthGuard] },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule { }
