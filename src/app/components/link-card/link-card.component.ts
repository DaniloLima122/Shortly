import { Component, Input, OnInit } from '@angular/core';
import { Links } from 'src/app/Interfaces/Links';

@Component({
  selector: 's-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  @Input() links !: Links;

  constructor() { }

  ngOnInit(): void {
  }

}
