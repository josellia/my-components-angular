import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'design-system';
  public cards: Array<any> = [];

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
}
