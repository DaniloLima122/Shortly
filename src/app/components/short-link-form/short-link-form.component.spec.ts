import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ShortLinkService } from 'src/app/services/short-link/short-link.service';
import { LinkCardComponent } from '../link-card/link-card.component';
import { ShortLinkFormComponent } from './short-link-form.component';
import { Link } from 'src/app/Interfaces/Link';

const linkReturn = { original_link: "google.com", short_link: "shrtco.de" };

const serviceMock = {
  getShortLink: (link: string): Link => (linkReturn)
}


describe('ShortLinkFormComponent', () => {
  let component: ShortLinkFormComponent;
  let fixture: ComponentFixture<ShortLinkFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      providers: [{
        provide: ShortLinkService,
        useValue: serviceMock
      }],
      declarations: [ShortLinkFormComponent, LinkCardComponent],
      schemas: [NO_ERRORS_SCHEMA]

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test("should show message if input is empty", () => {

    const spyShortLink = jest.spyOn(component, 'ShortLink');

    const form: DebugElement = fixture.debugElement.query(By.css('form'))
    const spanInvalidFormStatus: DebugElement = fixture.debugElement.query(By.css('span'))

    component.formGroup.get("link")?.setValue("");

    form.nativeElement.submit();

    fixture.detectChanges()

    expect(spanInvalidFormStatus.nativeElement.className).toBe('spanInvalidForm')
    expect(spyShortLink).toBeCalled();

  })

  test("should not call service if form is invalid", () => {

    component.formGroup.get("link")?.setValue("");

    const spyServicegetLinks = jest.spyOn(serviceMock, 'getShortLink');

    const form: DebugElement = fixture.debugElement.query(By.css('form'))

    form.nativeElement.submit();

    expect(spyServicegetLinks).not.toHaveBeenCalled();

  })

  test("should call service if form is valid", () => {

    component.formGroup.get("link")?.setValue("google.com");

    const spyServicegetLinks = jest.spyOn(serviceMock, 'getShortLink');

    const form: DebugElement = fixture.debugElement.query(By.css('form'))

    form.nativeElement.submit();

    expect(spyServicegetLinks).toHaveBeenCalled();
    expect(spyServicegetLinks).toBeCalledWith("google.com");
    expect(spyServicegetLinks).toReturnWith(linkReturn);
  })

});
