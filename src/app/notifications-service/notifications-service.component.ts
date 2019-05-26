import { Component, OnInit } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-notifications-service',
  templateUrl: './notifications-service.component.html',
  styleUrls: ['./notifications-service.component.css']
})
export class NotificationsServiceComponent implements OnInit {

  private notif: NotificationsService
  constructor() { }

  ngOnInit() {
  }

  notify(){
  this.notif.success(
    'Success',
    'Yeahhh successfull create notification',
    {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: false,
      clickToClose: true,
      maxLength: 50
    }
  )
  }

}
