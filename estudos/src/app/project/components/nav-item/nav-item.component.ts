import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'jabuti-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() navItems: NavItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
