import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from './country.service';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HomeComponent } from './home/home.component';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { MenuComponent } from './menu/menu.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsServiceComponent } from './notifications-service/notifications-service.component';
import { NotificationService } from './notifications.service';

@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    CountryDetailComponent,
    HomeComponent,
    MenuComponent,
    NotificationsServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideMenuModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [CountryService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
