import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should hide menu', () => {

    component.isVisible = true;

    const spyToggle = jest.spyOn(component, 'toggleMenu');

    const buttonToggle : ElementRef<HTMLDivElement> = fixture.debugElement.query(By.css('.site_menu > button'))

    buttonToggle.nativeElement.click();

    expect(spyToggle).toBeCalled();
    expect(component.isVisible).toBeFalsy();
  })

  test('should show menu', () => {

    component.isVisible = false;

    const spyToggle = jest.spyOn(component, 'toggleMenu');

    const buttonToggle : ElementRef<HTMLDivElement> = fixture.debugElement.query(By.css('.site_menu > button'))

    buttonToggle.nativeElement.click();

    expect(spyToggle).toBeCalled();
    expect(component.isVisible).toBeTruthy();

  })
});
