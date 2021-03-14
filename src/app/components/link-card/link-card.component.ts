import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/Interfaces/Link';

@Component({
  selector: 's-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  @Input() links: Link = {
    original_link: "",
    short_link: ""
  }

  linkCopied = false;

  constructor() { }

  ngOnInit(): void {
  }

  copyLink() {

    this.linkCopied = true;

  }

}
