// Modules from angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
import { TransactionDetailComponent } from './dashboard-user/transaction-detail/transaction-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage/storage.service';
import { fakeBackendProvider } from 'src/core/serverFake/fake-backend';
import { NewProductMockServices } from 'src/core/mock/new-products.mock.services';
import { ProductsService } from 'src/app/services/product/products.service';
import { NewProductComponent } from './dashboard-user/new-product/new-product/new-product.component';
import { RequestDataMockServices } from 'src/core/mock/request-data.mock.services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    DashboardUserComponent,
    SummaryComponent,
    CardDetailComponent,
    TransactionDetailComponent,
    NewProductComponent
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
    HttpClientModule
  ],
  exports: [SidenavComponent],
  providers: [
    //Server Fake
    fakeBackendProvider,
    //Services
    AuthenticateService, CardService, StorageService, ProductsService,
    //Mock Data Services
    UserDataMockService, CardDataMockService,
    TransactionDataMockServices, NewProductMockServices,
    RequestDataMockServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
