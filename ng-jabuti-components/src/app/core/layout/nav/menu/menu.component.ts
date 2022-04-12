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
      url: '/pages/card',
      icon: 'fas fa-home',
    },
  
    {
      title: 'Alert',
      active: true,
      url: '/pages/alert',
      icon: 'fas fa-user',
      // children: [
      //   {
      //     title: 'Profile',
      //     active: true,
      //     url: '/user',
      //     icon: 'fas fa-user',
      //   },
      // ],
    },
   ];
   
  constructor() { }

  ngOnInit(): void {
  }

}
