import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly heroImageUrl = signal('assets/img/ticket-to-riot-hero-image.png');
  protected readonly heroImageAltText = signal('Ticket to Riot Hero Image');
}
