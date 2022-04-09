import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertSettings } from 'src/app/models/alert.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertSubscription = this.alertService.onAlert(this.id)
    .subscribe(alert => {
      if(!alert.message){
        this.alerts = [];

        return;
      }

      this.alerts.push(alert);

      if(alert.autoClose) {
        setTimeout(() => this.removeAlert(alert), 3000);
      }
    });

    this.routeSubscription = this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.alertService.clear(this.id);
      }
    })
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
      let value = this.alerts.find((value) => value === alert)?.fade;
      value ? (value = true) : null;

      setTimeout(() => {
        this.alerts = this.alerts.filter((value) => value !== alert);
      }, 250);
    } else {
      this.alerts = this.alerts.filter((value) => value !== alert);
    }
  }

  cssClass(alert: Alert){
    if(!alert) return;

    const classes = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
      [AlertSettings.SUCCESS]: 'alert alert-success',
      [AlertSettings.ERROR]: 'alert alert-danger',
      [AlertSettings.INFO]: 'alert alert-info',
      [AlertSettings.WARNING]: 'alert alert-warning'

    }

    classes.push(alertTypeClass[alert.alertType]);

    if(alert.fade){
      classes.push('fade');
    }

    return classes.join('');
  }
}
