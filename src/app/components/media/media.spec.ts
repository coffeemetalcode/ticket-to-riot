import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { vi } from 'vitest';

import { IMediaItem } from '@riot-models';
import { GhData } from '@riot-services';

import { Media } from './media';

const mockMediaItems: IMediaItem[] = [
  {
    id: '1',
    title: 'Test Video',
    type: 'video',
    date: '2024-01-15',
    embedUrl: 'https://www.youtube.com/embed/abc123',
    description: 'A test video',
    platform: 'youtube',
  },
  {
    id: '2',
    title: 'Test Audio',
    type: 'audio',
    date: '2024-01-10',
    embedUrl: 'https://w.soundcloud.com/player/?url=test',
    platform: 'soundcloud',
  },
];

describe('Media', () => {
  let fixture: ComponentFixture<Media>;
  let component: Media;
  let mockGhData: { getMedia: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    mockGhData = {
      getMedia: vi.fn().mockReturnValue(of({ media: mockMediaItems })),
    };

    await TestBed.configureTestingModule({
      imports: [Media],
      providers: [{ provide: GhData, useValue: mockGhData }],
    }).compileComponents();

    fixture = TestBed.createComponent(Media);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should call getMedia on init', () => {
    expect(mockGhData.getMedia).toHaveBeenCalledOnce();
  });

  test('should render an iframe for each media item', () => {
    const iframes = fixture.nativeElement.querySelectorAll('iframe');
    expect(iframes.length).toBe(mockMediaItems.length);
  });

  test('should render titles for each media item', () => {
    const headings = fixture.nativeElement.querySelectorAll('h4');
    expect(headings[0].textContent).toContain('Test Video');
    expect(headings[1].textContent).toContain('Test Audio');
  });

  test('should render description when present', () => {
    const paragraphs = fixture.nativeElement.querySelectorAll('p');
    expect(paragraphs[0].textContent).toContain('A test video');
  });

  test('sanitizeUrl should return a SafeResourceUrl', () => {
    const result = component.sanitizeUrl('https://www.youtube.com/embed/abc123');
    expect(result).toBeTruthy();
  });
});
