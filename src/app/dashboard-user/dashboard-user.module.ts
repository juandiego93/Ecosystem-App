import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserComponent } from './dashboard-user.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SummaryComponent } from './summary/summary.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { DashboardUserRoutingModule } from './dashboard-user-routing.module';

@NgModule({
  declarations: [
    DashboardUserComponent,
    SummaryComponent,
    CardDetailComponent,
    TransactionDetailComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    SidenavComponent,
    DashboardUserRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MatSidenavModule],
})
export class DashboardUserModule { }
