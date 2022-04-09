import { Component, OnInit } from '@angular/core';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'design-system';
  public cards: Array<any> = [];
  isAlert = false;

  constructor(private alertService: AlertService){}
  ngOnInit(): void {
      this.cards = [
        {
          title: 'test',
          content: 'bbbvbvbvbv'
        },

        {
          title: 'test2',
          content: 'bbbvbvbvbv'
        }
      ]
  }

  onclickAlert(){
    this.alertService.success('salvo com sucesso', {autoClose: false})
  }
}
