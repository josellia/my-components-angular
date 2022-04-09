import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  navItems = [
    {
      title: 'Home',
      active: true,
      url: '/home',
      icon: 'fas fa-home',
    },
  
    {
      title: 'User',
      active: true,
      url: '/user',
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
   
}
