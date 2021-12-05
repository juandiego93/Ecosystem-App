// Modules from angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthMockService } from 'src/core/mock/auth-mock.services';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticateService } from './services/auth/authenticate.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { UserDataMockService } from 'src/core/mock/user-data.mock.services';
import { SummaryComponent } from './dashboard-user/summary/summary.component';
import { CardDataMockService } from 'src/core/mock/card-data.mock.services';
import { CardService } from './services/card/card.service';
import { CardDetailComponent } from './dashboard-user/card-detail/card-detail.component';
import { TransactionDataMockServices } from 'src/core/mock/transaction-data.mock.services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    DashboardUserComponent,
    SummaryComponent,
    CardDetailComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [SidenavComponent],
  providers: [
    //Services
    AuthenticateService, CardService,
    //Mock Data Services
    AuthMockService, UserDataMockService, CardDataMockService, TransactionDataMockServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
