import { Component, OnInit } from '@angular/core';
import { Cows } from './models/cows';
import { AlertService } from './services/alert.service';
import { RestApiCownsService } from './services/rest-api-cowns.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'design-system';
  public cards: Array<any> = [];
  isAlert = false;

  public cowsData: Cows[] = [];
  public erroMsg: string = '';
  public errorBlock!: boolean;

  constructor(
    private alertService: AlertService, 
    private restApiServiceCows: RestApiCownsService){}
  ngOnInit(): void {
    this.listCows();


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
    this.alertService.success('salvo com sucesso', {autoClose: false});
  }

 public listCows(): void {
   this.restApiServiceCows.getCows().subscribe(cow => {
    this.cowsData = cow;
    
   },
    error => { 
      this.errorBlock = true;
      this.erroMsg = error.message;
      this.alertService.error(this.erroMsg, {autoClose: true});

    });
  }
}
