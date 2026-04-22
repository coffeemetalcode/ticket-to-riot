import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly heroImageUrl = signal(
    'assets/img/ticket-to-riot-hero-image-high-distressed-cutout.png',
  );
  protected readonly heroImageAltText = signal('Ticket to Riot Hero Image');
}
