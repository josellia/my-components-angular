import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navItems = [
    {
     title: 'Home',
     active: true,
     url: '/course',
     icon: 'fas fa-home'
    }
   ];
   
  constructor() { }

  ngOnInit(): void {
  }

}
