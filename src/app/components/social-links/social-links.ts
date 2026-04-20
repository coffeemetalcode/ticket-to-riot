import { Component, input } from '@angular/core';

// TODO: Move to shared location and export
interface ISocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks {
  links = input<ISocialLink[]>();
}
