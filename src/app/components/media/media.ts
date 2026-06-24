import { Component, inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IframeLazy } from '@riot-directives';
import { IMediaItem } from '@riot-models';
import { GhData } from '@riot-services';

@Component({
  selector: 'app-media',
  imports: [IframeLazy],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media implements OnInit {
  readonly #ghDataService = inject(GhData);
  readonly #sanitizer = inject(DomSanitizer);

  protected media = signal<IMediaItem[]>([]);

  ngOnInit(): void {
    this.#ghDataService.getMedia().subscribe((data) => {
      this.media.set(data.media);
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.#sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
