import { Injectable } from '@angular/core';
 
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
 
@Injectable()
export class NotificationService {
  private setting = { timeOut: 30000, showProgressBar: true, pauseOnHover: false, clickToClose: true, maxLength: 50};
  
  constructor(private notif: NotificationsService) { 
  }

  ngOnInit() {
  }

  success(title?: any, content?: any){
      var that = this;
      this.notif.success(
        title,
        content,
        that.setting
      )
    }

    error(title?: any, content?: any){
      var that = this;
      this.notif.error(
        title,
        content,
        that.setting
      )
    }

    alert(title?: any, content?: any, override?: any){
      var that = this;
      this.notif.alert(
        title,
        content,
        that.setting
      )
    }

    info(title?: any, content?: any, override?: any){
      var that = this;
      this.notif.info(
        title,
        content,
        that.setting
      )
    }

    warn(title?: any, content?: any, override?: any){
      var that = this;
      this.notif.warn(
        title,
        content,
        that.setting
      )
    }

    bare(title?: any, content?: any, override?: any){
      var that = this;
      this.notif.bare(
        title,
        content,
        that.setting
      )
    }

}