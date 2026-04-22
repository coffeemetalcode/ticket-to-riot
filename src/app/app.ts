import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { ISocialLink } from '@riot-models';
import { GhData } from '@riot-services';

import { SocialLinks } from './components/social-links/social-links';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SocialLinks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  #ghDataService = inject(GhData);

  protected readonly copyrightYear = signal<string>('');
  protected readonly title = signal('Ticket to rioT');
  protected readonly socialLinks = signal<ISocialLink[]>([]);

  ngOnInit(): void {
    this.#ghDataService.getSocialLinks().subscribe((data) => {
      this.socialLinks.set(data.socialLinks);
    });

    this.copyrightYear.set(new Date().getFullYear().toString());
  }
}
