import { ClipboardModule, Clipboard,  } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LinkCardComponent } from './link-card.component';


describe('LinkCardComponent', () => {
  let component: LinkCardComponent;
  let fixture: ComponentFixture<LinkCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkCardComponent ],
      imports: [CommonModule,ClipboardModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(LinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component.linkCopied).toBeFalsy();

    expect(component).toBeTruthy();
  });

  test('should copy shorted link', () => {

    const button : DebugElement = fixture.debugElement.query(By.css('button'));

    const spyCopyLink = jest.spyOn(component, 'copyLink');

    button.nativeElement.click();

    fixture.detectChanges();

    expect(spyCopyLink).toBeCalledTimes(1);
    expect(component.linkCopied).toBeTruthy();

  })
});

