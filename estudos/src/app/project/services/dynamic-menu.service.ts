import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DynamicMenuService {
  dataMenu = [
    {
      title: 'Home',
    },
    {
      title: 'About',
    },
  ];

   map = new Map(Object.entries(this.dataMenu));

   rootLevelNodes: string[] = ["Home", "About"];
  
  getChildren(node: string){
    return of(this.map.get(node)).pipe(delay(1000))
  }

  isExpandable(node: string): boolean {
    return this.map.has(node);
  }
  constructor() {}
}
