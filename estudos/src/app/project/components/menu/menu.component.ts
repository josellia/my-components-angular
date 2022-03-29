import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'jabuti-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  navItems = [
    {
     title: 'Home',
     active: true,
     url: '/course'
    }
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
