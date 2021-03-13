import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Links } from '../../Interfaces/Links';

@Component({
  selector: 's-short-link-form',
  templateUrl: './short-link-form.component.html',
  styleUrls: ['./short-link-form.component.scss']
})
export class ShortLinkFormComponent implements OnInit {

  shortedLiksList = new BehaviorSubject<Links[]>([{
    link: "Meu link",
    shortLink: "Meu link cortado"
  }])

  formGroup !: FormGroup;
  @ViewChild('input_link') input_link !:  ElementRef<HTMLInputElement>;

  constructor(private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group(
      {
        link: ["", Validators.required]
      }
    )
  }


  getInvalidStatus(formGroupDirective : FormGroupDirective){
    return this.formGroup.get('link')?.errors?.required && (formGroupDirective.submitted || this.formGroup.get('link')?.touched)
  }

  ShortLink(event: Event){

    event.preventDefault();

    this.formGroup.valid &&
    this.shortedLiksList.next(this.shortedLiksList.value.concat([{link: this.formGroup.get("link")?.value, shortLink: "outro link cortado"}]))

    this.input_link.nativeElement.focus();
  }
}
