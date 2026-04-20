import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { SocialLinks } from './components/social-links/social-links';
import { GhData } from './shared/services';

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
    this.#ghDataService.getSocialLinks().subscribe((data) => {
      this.socialLinks.set(data.socialLinks);
    });
  }
}
