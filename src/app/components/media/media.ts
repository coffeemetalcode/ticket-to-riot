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

  ytUrl = `https://www.youtube.com/embed/QO0hTbmry5E?si=D3w49QQa4vzD1Hie`;
  safeYTUrl!: SafeResourceUrl;

  ngOnInit(): void {
    this.safeYTUrl = this.#sanitizer.bypassSecurityTrustResourceUrl(this.ytUrl);

    this.#ghDataService.getMedia().subscribe((data) => {
      this.media.set(data.media);
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.#sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
