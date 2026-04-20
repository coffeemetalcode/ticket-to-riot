import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { GhData } from './shared/services/gh-data';
import { SocialLinks } from './components/social-links/social-links';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SocialLinks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  #ghDataService = inject(GhData);

  protected readonly title = signal('Ticket to rioT');
  protected socialLinks = signal<any[]>([]);

  ngOnInit(): void {
    this.#ghDataService.getSocialLinks().then((data) => {
      this.socialLinks.set(data.socialLinks);
    });
  }
}
