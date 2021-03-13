import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkCardComponent } from '../link-card/link-card.component';
import { ShortLinkFormComponent } from './short-link-form.component';


describe('ShortLinkFormComponent', () => {
  let component: ShortLinkFormComponent;
  let fixture: ComponentFixture<ShortLinkFormComponent>;

  beforeEach(() => {
  TestBed.configureTestingModule({
      imports: [ReactiveFormsModule , FormsModule],
      declarations: [ ShortLinkFormComponent, LinkCardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
  });

  beforeEach((done) => {
    fixture = TestBed.createComponent(ShortLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    done()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test("should show message if input is empty", () => {

  //   const spyShortLink = jest.spyOn(component, 'ShortLink');



  // })
});
