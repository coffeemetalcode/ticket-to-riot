import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeLazy } from './iframe-lazy';

@Component({
  template: `<iframe appIframeLazy [iframeTitle]="title" [allowFullscreen]="allowFs"></iframe>`,
  imports: [IframeLazy],
})
class TestHostComponent {
  title = '';
  allowFs = true;
}

describe('IframeLazy', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let iframe: HTMLIFrameElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    iframe = fixture.nativeElement.querySelector('iframe');
  });

  test('should apply the directive', () => {
    expect(iframe).toBeTruthy();
  });

  test('should set loading="lazy"', () => {
    expect(iframe.getAttribute('loading')).toBe('lazy');
  });

  test('should set referrerpolicy', () => {
    expect(iframe.getAttribute('referrerpolicy')).toBe('no-referrer-when-downgrade');
  });

  test('should set title from iframeTitle input', () => {
    fixture.componentInstance.title = 'My Video';
    fixture.detectChanges();
    expect(iframe.getAttribute('title')).toBe('My Video');
  });

  test('should set allowfullscreen when allowFullscreen is true (default)', () => {
    expect(iframe.hasAttribute('allowfullscreen')).toBe(true);
  });

  test('should remove allowfullscreen when allowFullscreen is false', () => {
    fixture.componentInstance.allowFs = false;
    fixture.detectChanges();
    expect(iframe.hasAttribute('allowfullscreen')).toBe(false);
  });
});
