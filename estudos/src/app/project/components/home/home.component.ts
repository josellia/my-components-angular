import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jabuti-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public executeSelectedChange = (event: any) => {
    console.log(event);
  }
}
