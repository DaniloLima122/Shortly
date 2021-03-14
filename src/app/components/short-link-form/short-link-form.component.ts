import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Link } from '../../Interfaces/Link';
import { ShortLinkService } from 'src/app/services/short-link/short-link.service';

@Component({
  selector: 's-short-link-form',
  templateUrl: './short-link-form.component.html',
  styleUrls: ['./short-link-form.component.scss']
})
export class ShortLinkFormComponent implements OnInit {

  shortedLiksList = new BehaviorSubject<Link[]>([])

  formGroup !: FormGroup;

  @ViewChild('input_link') input_link !:  ElementRef<HTMLInputElement>;

  constructor(private formBuilder : FormBuilder, private shortLinkService : ShortLinkService) {

  }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group(
      {
        link: ["", Validators.required]
      }
    )
  }

  ShortLink(event: Event){

    event.preventDefault();

    this.formGroup.valid &&
    this.shortLinkService.getShortLink(this.formGroup.get('link')?.value)

    this.input_link.nativeElement.focus();
  }
}
