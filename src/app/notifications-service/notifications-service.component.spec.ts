import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsServiceComponent } from './notifications-service.component';

describe('NotificationsServiceComponent', () => {
  let component: NotificationsServiceComponent;
  let fixture: ComponentFixture<NotificationsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
