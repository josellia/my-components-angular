import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService implements OnInit {
  public sub = new Subject();

  constructor() { }

  ngOnInit(): void {
      throw new Error('Method not  implemented');
  }
}
