import { Component, OnInit } from '@angular/core';

import {faBars} from '@fortawesome/free-solid-svg-icons'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 's-menu',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showHideMenu', [
      state('isHidden', style({
        opacity: 0,
        transform: 'translateY(120px)',
        pointerEvents: 'none',

      })),

      state('isVisible', style({
        opacity: 1,
        transform: 'translateY(75px)',
        pointerEvents: 'all',
      })),

      transition('isHidden=>isVisible', animate('.5s ease')),
      transition('isVisible=>isHidden', animate('.5s ease'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  menuIcon = faBars;

  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){

    this.isVisible = !this.isVisible;
  }

}
