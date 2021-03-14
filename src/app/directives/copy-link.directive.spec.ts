import { CopyLinkDirective } from './copy-link.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: "<button sCopyLink></button>"
})
class ButtonMock{}

describe('CopyLinkDirective', () => {

  let componet : ButtonMock;
  let fixture : ComponentFixture<ButtonMock>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyLinkDirective,ButtonMock]
    })
    fixture = TestBed.createComponent(ButtonMock)
    componet = fixture.componentInstance;
  })

  it('should create an instance', () => {

    expect(componet).toBeTruthy();
  });


  test('should change button style class on it click', () => {

    const button : DebugElement = fixture.debugElement.query(By.css('button'));

    button.nativeElement.click();

    fixture.detectChanges();

    const currentButtonClass = (button.nativeElement as HTMLButtonElement).className;

    expect(currentButtonClass).toBe('link-copied');

  })
});
