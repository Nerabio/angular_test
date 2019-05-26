import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Country } from '../country';
import { CountryService } from '../country.service';
import { NotificationService } from '../notifications.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-country-detail',
    templateUrl: './country-detail.component.html',
    styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
    country: Country;
 
    constructor(
        private route: ActivatedRoute,
        private countryService: CountryService,
        private location: Location,
        private notificationService: NotificationService,
    ) { }
 
    ngOnInit(): void {
        this.getCountry();
    }
 
    getCountry(): void {
        const name: string = this.route.snapshot.paramMap.get('name');
        this.country = this.countryService.getCountry(name);
    }
 
    goBack(): void {
        this.location.back();
    }

    noty(): void{
        this.notificationService.success('success','success');
        this.notificationService.alert('alert','alert');
        this.notificationService.info('info','info');
        this.notificationService.warn('warn','warn');
        this.notificationService.bare('bare','bare');
    }
}